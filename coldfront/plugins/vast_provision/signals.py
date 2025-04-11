from django.dispatch import receiver
from django_q.tasks import async_task

from coldfront.core.allocation.signals import (allocation_activate, allocation_change_approved,
                                               allocation_activate_user, allocation_remove_user)
from coldfront.core.allocation.views import (AllocationCreateView, AllocationChangeView, 
                                             AllocationAddUsersView, AllocationRemoveUsersView)


@receiver(allocation_activate, sender=AllocationCreateView)
@receiver(allocation_change_approved, sender=AllocationChangeView)
def activate_vast_allocation(sender, **kwargs):
    allocation_pk = kwargs.get('allocation_pk')
    async_task('coldfront.plugins.vast_provision.tasks.provision_project_storage',
               allocation_pk)


@receiver(allocation_activate_user, sender=AllocationAddUsersView)
def activate_vast_user(sender, **kwargs):
    allocation_user_pk = kwargs.get('allocation_user_pk')
    async_task('coldfront.plugins.vast_provision.tasks.add_user',
               allocation_user_pk)


@receiver(allocation_remove_user, sender=AllocationRemoveUsersView)
def remove_vast_user(sender, **kwargs):
    allocation_user_pk = kwargs.get('allocation_user_pk')
    async_task('coldfront.plugins.vast_provision.tasks.remove_user',
               allocation_user_pk)