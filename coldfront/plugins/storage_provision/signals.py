from django.dispatch import receiver
from django_q.tasks import async_task

from coldfront.core.allocation.signals import (allocation_activate, allocation_change_approved)
from coldfront.core.allocation.views import (AllocationCreateView, AllocationChangeView)


@receiver(allocation_activate, sender=AllocationCreateView)
@receiver(allocation_change_approved, sender=AllocationChangeView)
def activate_storage_allocation(sender, **kwargs):
    allocation_pk = kwargs.get('allocation_pk')
    async_task('coldfront.plugins.storage.tasks.provision_or_update_storage', allocation_pk)
