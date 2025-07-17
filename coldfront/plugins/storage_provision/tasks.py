from pathlib import Path
from coldfront.core.utils.common import import_from_settings
from coldfront.core.allocation.models import Allocation
from coldfront.plugins.storage_provision.utils import (find_storage_handler, lazy_load_module, load_module_from_path, validate_allocation_active,
                                                       get_allocation_attributes, get_root_resource_from_allocation)

STORAGE_HANDLER_PATH = import_from_settings('STORAGE_HANDLER_PATH')

def provision_or_update_storage(allocation_pk):
    """
    Provision or update storage for an allocation.
    """
    allocation = Allocation.objects.get(pk=allocation_pk)

    # check if the allocation is of resource type Storage
    is_storage = get_root_resource_from_allocation(allocation).resource_type.name == 'Storage'
    # check if the allocation has the required attributes for storage provisioning with this plugin
    storage_type = get_allocation_attributes(allocation, {'storage_type'})
    if not is_storage or storage_type is None or 'storage_type' not in storage_type:
        # this allocation is not for storage provisioning with this plugin
        return

    # raise an error if the allocation is not active or the PI is not active
    validate_allocation_active(allocation)

    # try to import the storage handler module that matches the storage_type attribute
    try:
        module_name = f'coldfront.plugins.storage_provision.storage_handler.{storage_type["storage_type"]}'
        module = lazy_load_module(module_name)
    except ImportError as exc:
        logger.warning("Module '%s' not found", module_name)
        module = load_module_from_path(storage_type, Path(STORAGE_HANDLER_PATH))
        if module is None:
            raise ValueError(f"Module '{module_name}' not found at {STORAGE_HANDLER_PATH}")
    # find the storage handler class in the module
    storage_handler_class = find_storage_handler(module)

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








