from pathlib import Path

from vast_api_client import VASTClient

from coldfront.core.utils.common import import_from_settings
from coldfront.core.allocation.models import Allocation, AllocationUser
from coldfront.plugins.vast_provision.vast_utils import (create_or_update_view, create_or_update_quota,
                                                         create_or_update_folder, create_or_update_protected_path)

VASTUSER = import_from_settings('VASTUSER')
VASTPASS = import_from_settings('VASTPASS')


def is_vast_storage(resource):
    return resource.resource_type.name == 'VAST Storage'

def validate_allocation_active(allocation):
    if allocation.status.name != 'Active':
        raise ValueError('Allocation must be Active to provision storage')
    elif not allocation.project.pi.is_active:
        raise ValueError('PI must be Active to provision storage')
    else:
        return True

def provision_project_storage(allocation_pk):
    allocation = Allocation.objects.get(pk=allocation_pk)

    validate_allocation_active(allocation)
        
    if not is_vast_storage(allocation.get_parent_resource):
        return
    
    required_attrs = {'storage_host', 'storage_tier', 'cost_per_terabyte', 'storage_group_name', 'add_view',
                      'storage_volume', 'storage_path', 'storage_protocol', 'Storage Quota (GB)', 'view_policy_id', 
                      'protection_policy_id', 'vast_tenant_id'}

    storage_request = get_allocation_attributes(allocation, required_attrs)
    add_view = storage_request['add_view']
    if not add_view:
        return
    
    # we need to get allocation users to determine the owner of the storage
    owner = allocation.project.pi.get_username()
    
    storage_path = Path(storage_request['volume'], storage_request['storage_path'].strip('/'))
    # provision storage
    # check to see if view already exists: GET request to /api/latest/views?path={storage_path} and check if response is empty
    # if not, create view: POST to /api/latest/views with body {'path': storage_path, 'name': storage_path, 'tenant_id': vast_tenant_id}

    vc = VASTClient(storage_request['storage_host'], VASTUSER, VASTPASS)
    
    create_or_update_view(vc, storage_path, storage_request['storage_protocol'], storage_request['view_policy_id'])
    create_or_update_quota(vc, storage_path, storage_request['Storage Quota (GB)'])
    
    create_or_update_folder(vc, storage_path, storage_request['storage_group_name'], storage_request['storage_protocol'], owner)

    create_or_update_protected_path(vc, storage_path, storage_request['protection_policy_id'], storage_request['vast_tenant_id'])


def provision_home_directory(allocation_user_pk):
    allocation_user = AllocationUser.objects.get(pk=allocation_user_pk)
    if allocation_user.is_active != True:
        raise ValueError('Allocation User must be Active to provision storage')
    
    allocation = allocation_user.allocation
    validate_allocation_active(allocation)
        
    if not is_vast_storage(allocation.get_parent_resource):
        return
    
    required_attrs = {'storage_host', 'storage_tier', 'cost_per_terabyte', 'storage_group_name', 'add_view',
                      'storage_volume', 'storage_path', 'storage_protocol', 'Storage Quota (GB)', 'view_policy_id', 'protection_policy_id', 'vast_tenant_id'}

    storage_request = get_allocation_attributes(allocation, required_attrs)
    add_view = storage_request['add_view']
    if not add_view:
        return
    
    # we need to get allocation users to determine the owner of the storage
    owner = allocation_user.user.username
    
    storage_path = Path(storage_request['volume'], storage_request['storage_path'].strip('/'))

    vc = VASTClient(storage_request['storage_host'], VASTUSER, VASTPASS)
    
    create_or_update_folder(vc, storage_path, storage_request['storage_group_name'], storage_request['storage_protocol'], owner)


def get_allocation_attributes(allocation, required_attrs=None):

    allocation_attributes = {}
    
    # get the allocation attributes
    for i in allocation.allocationattribute_set.iterator():
        if i.allocation_attribute_type.name in required_attrs:
            allocation_attributes[i.allocation_attribute_type.name] = i.value

    # traverse the resource tree to get the storage attributes
    resource = allocation.get_parent_resource
    has_parent = True
    while has_parent:
        for r in resource.resourceattribute_set.iterator():
            if r.resource_attribute_type.name in required_attrs:
                allocation_attributes[r.resource_attribute_type.name] = r.value
        if resource.parent_resource is not None:
            resource = resource.parent_resource
        else:
            has_parent = False

    assert required_attrs == set(allocation_attributes.keys()), f"Missing required attributes: {required_attrs - set(allocation_attributes.keys())}"
    return allocation_attributes


def add_user(allocation_user_pk):
    allocation_user = AllocationUser.objects.get(pk=allocation_user_pk)
    if allocation_user.is_active != True:
        raise ValueError('Allocation User must be Active to provision storage')
    
    allocation = allocation_user.allocation
    validate_allocation_active(allocation)
        
    if not is_vast_storage(allocation.get_parent_resource):
        return
    
    required_attrs = {'storage_host', 'storage_tier', 'cost_per_terabyte', 'storage_group_name', 'add_view',
                      'storage_volume', 'storage_path', 'storage_protocol', 'Storage Quota (GB)', 'view_policy_id', 'protection_policy_id', 'vast_tenant_id'}

    storage_request = get_allocation_attributes(allocation, required_attrs)
    add_view = storage_request['add_view']
    if not add_view:
        return
    
    # we need to get allocation users to determine the owner



