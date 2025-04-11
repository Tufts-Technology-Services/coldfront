import logging
import subprocess

from django.contrib.auth.models import User

from coldfront.core.allocation.models import Allocation, AllocationUser
from coldfront.core.allocation.utils import set_allocation_user_status_to_error
from coldfront.core.utils.mail import email_template_context, send_admin_email_template
from coldfront.plugins.user_sync.utils import NISClient
from coldfront.plugins.user_sync.search import LDAPUnixUIDSearch

logger = logging.getLogger(__name__)

def user_is_active(allocation_user):
    return allocation_user.allocation.status.name == 'Active' and allocation_user.status.name == 'Active'


def can_remove_user(allocation_user):
    return allocation_user.allocation.status.name in ['Active', 'Pending', 'Inactive (Renewed)'] and allocation_user.status.name == 'Removed'


def get_allocation_groups(allocation_user):
    groups = allocation_user.allocation.get_attribute_list(UNIX_GROUP_ATTRIBUTE_NAME)
    if len(groups) == 0:
        logger.info("Allocation does not have any groups. Nothing to add")
    return groups


def check_user_provisioned(username):
    try:
        user = NISClient().get_user(username)
        return True
    except ValueError as e:
        logger.error("User %s not found: %s", username, e)
        return False

def provision_hpc_user(allocation_user_pk):
    allocation_user = AllocationUser.objects.get(pk=allocation_user_pk)
    ldap_info = LDAPUnixUIDSearch().get_info(username=allocation_user.user.username)
    if not ldap_info.get('unix_uid'):
        logger.error("No unix_uid found for user %s", allocation_user.user.username)
        # should send a ticket to the helpdesk requesting a unix id for this user
        raise ValueError("No unix_uid found for user %s" % allocation_user.user.username)
    elif check_user_provisioned(allocation_user.user.username):
        logger.info("User %s already exists on the cluster", allocation_user.user.username)
        # this might be called for every resource allocation a user is added to. don't send an email.
        return
    
    else:
        # provision hpc account
        logger.info("Found unix_uid %s for user %s", ldap_info.get('uid_number'), allocation_user.user.username)
        # provision hpc account with this unix_uid for this user

        # creates user in NIS and adds user to slurm
        p = subprocess.run(["/usr/local/sbin/utln-adduser", ldap_info.get('username')],
                           check=True, capture_output=True, encoding='utf-8')
        logger.info("utln-adduser output: %s", p.stdout)

        if not check_user_provisioned(allocation_user.user.username):
            logger.error("Failed to provision user %s", allocation_user.user.username)
            return
        else:
            logger.info("Provisioned user %s successfully", allocation_user.user.username)
            #"*****************USER COMMUNICATION*************************"
            #"Dear "$(bash /cluster/tufts/hpc/tools/rt_scripts/misc/getname.sh $UNAME)":"
            #bash /cluster/tufts/hpc/tools/rt_scripts/misc/comm/account_creation_comm.sh
            # "*****************WORKNOTE*************************"
            #getent passwd   "$UNAME"
            # **************************************************
            add_user_to_elist(allocation_user_pk)


def remove_user(allocation_user_pk):
    allocation_user = AllocationUser.objects.get(pk=allocation_user_pk)
    pass


def add_user_to_elist(allocation_user_pk):
    pass


def add_user_to_project_group(allocation_user_pk):
    """
    Add user to project group and create subfolder
    """
    # check group exists
    # getent group <groupname>

    # check if user is in group
    # getent group <groupname> | grep --color -w <username>
    # if user is in group, do nothing

    # if user is not in group, add user to group
    # /usr/local/sbin/utln-prep <username>
    # /usr/local/sbin/utln-usermod <username> <groupname>
    # /usr/local/sbin/utln-userprojectprep <username> <groupname> <foldername> # create user subfolder on VAST
    
    # confirm user is in group

    # send user confirmation email
    # 'Dear <displayname>:'
    # /cluster/tufts/hpc/tools/rt_scripts/misc/comm/add_user_to_group_folder_comm.sh <username> <groupname> <foldername>
    
    # worknote
    # getent passwd <username>
    # getent group <groupname> | grep --color -w <username>
    # df -h /cluster/tufts/<foldername>
    pass



def add_user_groups(allocation_user_pk):
    # todo: think about how to handle case where rstore is allocated, but no hpc is allocated
    # should be a user in coldfront, either way
    # if no hpc is allocated, then we should not provision an hpc account or add the user to any groups on the hpc
    # instead, add the user to the rstore group in AD
    # if hpc resources are allocated, then add the user to the hpc group in the cluster, provision the hpc account

    allocation_user = AllocationUser.objects.get(pk=allocation_user_pk)
    if not user_is_active(allocation_user):
        logger.warning("User is not active. Will not add groups")
        return

    groups = get_allocation_groups(allocation_user)

    for g in groups:
        try:
            check_ipa_group_error(res)
            res = add_user_to_group(allocation_user.user.username, g)
        except AlreadyMemberError as e:
            logger.warning("User %s is already a member of group %s",
                        allocation_user.user.username, g)
        except Exception as e:
            logger.error("Failed adding user %s to group %s: %s",
                         allocation_user.user.username, g, e)
            set_allocation_user_status_to_error(allocation_user_pk)
        else:
            logger.info("Added user %s to group %s successfully",
                        allocation_user.user.username, g)


def add_user_to_group(username, groupname):
    p = subprocess.run(["/usr/local/sbin/utln-usermod", username, groupname],
                       check=True, capture_output=True, encoding='utf-8')
    logger.info("utln-usermod output: %s", p.stdout)

    if p.returncode == 0:
        return True
    else:
        return False
    
def added_to_group_communication(username, groupname):
    """
                echo "*****************USER COMMUNICATION*************************"
            echo "Dear "$(bash /cluster/tufts/hpc/tools/rt_scripts/misc/getname.sh $UNAME)":"
            bash /cluster/tufts/hpc/tools/rt_scripts/misc/comm/only_add_user_to_group_comm.sh $UNAME $GNAME
            echo "*****************WORKNOTE*************************"
            getent passwd   "$UNAME"
            getent group "$GNAME" | grep --color "$UNAME"
            echo "**************************************************"
    """
    ctx = email_template_context()
    ctx.update({'username': username, 'groupname': groupname})
    subject = f"User {username} added to group {groupname}"
    send_admin_email_template(subject, 'templates/add_user_to_group_comm.txt', ctx)


def remove_user_group(allocation_user_pk):
    allocation_user = AllocationUser.objects.get(pk=allocation_user_pk)
    if not can_remove_user(allocation_user):
        logger.warning("User is not active or pending or allocation user status is not 'removed'. Will not remove groups")
        return
    pass
