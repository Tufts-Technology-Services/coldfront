import logging
import os
import sys

from django.contrib.auth.models import User
from django.core.management.base import BaseCommand, CommandError

from coldfront.plugins.user_sync.search import LDAPUnixUIDSearch
from coldfront.core.project.models import (Project, ProjectUser, ProjectStatusChoice, ProjectUserStatusChoice)
from coldfront.core.allocation.models import (Allocation, AllocationUser, AllocationUserStatusChoice)

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    help = 'Import Users and Groups from NIS to ColdFront'

    def add_arguments(self, parser):
        parser.add_argument("-d", "--disable", help="Disable users in ColdFront that are Disabled/NotFound in NIS", action="store_true")
        parser.add_argument("-n", "--noop", help="Print commands only. Do not run any commands.", action="store_true")

    def check_nis_error(self, res):
        if not res or 'result' not in res:
            raise ValueError('Missing NIS result')

    def add_user(self, username, first_name, last_name, email, 
                 status, is_staff=False, is_superuser=False):
        # add a user from NIS
            user, _ = User.objects.get_or_create(
                first_name=first_name.strip(),
                last_name=last_name.strip(),
                username=username.strip(),
                email=email.strip()
            )
            user.is_active = status
            user.is_staff = is_staff
            user.is_superuser = is_superuser
            user.save()
    
    def add_project(self, pi_user, title, status, force_review=False):
        project_obj, _ = Project.objects.get_or_create(
            pi=pi_user,
            title=title,
            description=f"{title} project",
            status=ProjectStatusChoice.objects.get(name=status),
            force_review=force_review
        )


    def disable_user_in_coldfront(self, user, nis_status):
        if nis_status:
            return
        # Disable user from any active allocations
        inactive_status = AllocationUserStatusChoice.objects.get(name='Removed')
        user_allocations = AllocationUser.objects.filter(user=user)
        for ua in user_allocations:
            if ua.status.name == 'Active' and ua.allocation.status.name == 'Active':
                logger.info("Removing user from allocation user=%s allocation=%s", user.username, ua.allocation)
                ua.status = inactive_status
                ua.save()

        # Disable user from any active projects
        inactive_status = ProjectUserStatusChoice.objects.get(name='Removed')
        user_projects = ProjectUser.objects.filter(user=user)
        for pa in user_projects:
            if pa.status.name == 'Active' and pa.project.status.name == 'Active':
                logger.info("Removing user from project user=%s project=%s", user.username, pa.project)
                pa.status = inactive_status
                pa.save()

        self.sync_user_status(user, active=False)

    def sync_user_status(self, user, active=False):
        try:
            user.is_active = active
            user.save()
        except Exception as e:
            logger.error('Failed to update user status: %s - %s', user.username, e)


    def process_user(self, user):
        if self.filter_user and self.filter_user != user.username:
            return

        user_allocations = AllocationUser.objects.filter(
            user=user,
            allocation__allocationattribute__allocation_attribute_type__name=UNIX_GROUP_ATTRIBUTE_NAME
        )

        active_groups = []
        for ua in user_allocations:
            if not ua.is_active():
                continue

            all_resources_inactive = True
            for r in ua.allocation.resources.all():
                if r.is_available:
                    all_resources_inactive = False

            if all_resources_inactive:
                logger.debug("Skipping allocation to %s for user %s due to all resources being inactive", ua.allocation.get_resources_as_string, user.username)
                continue

            for g in ua.allocation.get_attribute_list(UNIX_GROUP_ATTRIBUTE_NAME):
                if g not in active_groups:
                    active_groups.append(g)

        removed_groups = []
        for ua in user_allocations:
            if ua.is_active():
                continue

            for g in ua.allocation.get_attribute_list(UNIX_GROUP_ATTRIBUTE_NAME):
                if g not in removed_groups and g not in active_groups:
                    removed_groups.append(g)

        if self.filter_group:
            if self.filter_group in active_groups:
                active_groups = [self.filter_group]
            else:
                active_groups = []

            if self.filter_group in removed_groups:
                removed_groups = [self.filter_group]
            else:
                removed_groups = []

        if len(active_groups) == 0 and len(removed_groups) == 0:
            return

        self.check_user_freeipa(user, active_groups, removed_groups)

    def handle(self, *args, **options):
        os.environ["KRB5_CLIENT_KTNAME"] = CLIENT_KTNAME

        verbosity = int(options['verbosity'])
        root_logger = logging.getLogger('')
        if verbosity == 0:
            root_logger.setLevel(logging.ERROR)
        elif verbosity == 2:
            root_logger.setLevel(logging.INFO)
        elif verbosity == 3:
            root_logger.setLevel(logging.DEBUG)
        else:
            root_logger.setLevel(logging.WARN)

        self.noop = FREEIPA_NOOP
        if options['noop']:
            self.noop = True
            logger.warn("NOOP enabled")

        self.sync = False
        if options['sync']:
            self.sync = True
            logger.warn("Syncing FreeIPA with ColdFront")

        self.disable = False
        if options['disable']:
            self.disable = True
            logger.warn("Disabling users in ColdFront that are disabled in FreeIPA")

        header = [
            'action',
            'username',
            'group',
            'ipa/cf',
        ]

        if options['header']:
            self.writerow(header)

        self.ipa_ldap = LDAPUserSearch("", "")
        bus = dbus.SystemBus()
        infopipe_obj = bus.get_object("org.freedesktop.sssd.infopipe", "/org/freedesktop/sssd/infopipe")
        self.ifp = dbus.Interface(infopipe_obj, dbus_interface='org.freedesktop.sssd.infopipe')

        users = User.objects.filter(is_active=True)
        logger.info("Processing %s active users", len(users))

        self.filter_user = ''
        self.filter_group = ''
        if options['username']:
            logger.info("Filtering output by username: %s",
                        options['username'])
            self.filter_user = options['username']
        if options['group']:
            logger.info("Filtering output by group: %s", options['group'])
            self.filter_group = options['group']

        for user in users:
            self.process_user(user)

        if self.disable:
            for user in users:
                if self.filter_user and self.filter_user != user.username:
                    continue

                try:
                    result = self.ifp.GetUserAttr(user.username, ["nsaccountlock"])
                    if 'nsAccountLock' in result and str(result['nsAccountLock'][0]) == 'TRUE':
                        # User is disabled in FreeIPA so disable in coldfront
                        logger.info("User is disabled in FreeIPA so disable in ColdFront: %s", user.username)
                        self.disable_user_in_coldfront(user, 'Disabled')
                except dbus.exceptions.DBusException as e:
                    if 'No such user' in str(e) or 'NotFound' in str(e):
                        # User is not found in FreeIPA so disable in coldfront
                        logger.info("User is not found in FreeIPA so disable in ColdFront: %s", user.username)
                        self.disable_user_in_coldfront(user, 'NotFound')
                    else:
                        logger.error("dbus error failed while checking user %s in FreeIPA: %s", user.username, e)

