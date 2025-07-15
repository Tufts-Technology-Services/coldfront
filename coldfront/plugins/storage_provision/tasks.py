from pathlib import Path

from coldfront.core.utils.common import import_from_settings
from coldfront.core.allocation.models import Allocation
from coldfront.plugins.storage_provision.utils import (get_allocation_group_name, validate_allocation_active, 
                                                       get_allocation_attributes)



def provision_or_update_storage(allocation_pk):
    """
    Provision or update storage for an allocation.
    """
    allocation = Allocation.objects.get(pk=allocation_pk)
    storage_type = get_allocation_attributes(allocation, {'storage_type'})
    if storage_type is None or 'storage_type' not in storage_type:
        # this allocation is not for storage provisioning
        return

    validate_allocation_active(allocation)

    group_name = get_allocation_group_name(allocation)

    # todo: determine storage handler based on storage_type
    # for now, we assume VAST storage

    ''''''
    required_attrs = {'storage_type',
                      'storage_quota',
                      'storage_path', 
                      'storage_host', 
                      'storage_tier', 
                      'cost_per_terabyte', 
                      'add_view',
                      'storage_volume', 
                      'storage_protocol', 
                      'Storage Quota (GB)', 
                      'view_policy_id', 
                      'protection_policy_id', 
                      'vast_tenant_id'}








