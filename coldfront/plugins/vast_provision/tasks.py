from vast_api_client import VASTClient
from vast_api_client.utils import gib_to_bytes

from coldfront.core.utils.common import import_from_settings
from coldfront.core.allocation.models import Allocation

VASTUSER = import_from_settings('VASTUSER')
VASTPASS = import_from_settings('VASTPASS')


def provision_storage(allocation_pk):
    allocation = Allocation.objects.get(pk=allocation_pk)

    # validate allocation is Active
    if allocation.status.name != 'Active':
        raise ValueError('Allocation must be Active to provision storage')
    
    # validate PI is Active
    if not allocation.project.pi.is_active:
        raise ValueError('PI must be Active to provision storage')
    
    pi = allocation.project.pi.get_username()
    resource = allocation.get_parent_resource
    
    if resource.resource_type.name != 'VAST Storage':
        return
    
    storage_request = {}
    required_attrs = {'storage_host', 'vast_tenant_id', 'storage_tier', 'cost_per_terabyte', 'storage_group_name',
                      'Storage Quota (GB)', 'storage_path', 'storage_protocol', 'view_policy_id', 'protection_policy_id'}
    
    # get the allocation attributes
    for i in allocation.allocationattribute_set.iterator():
        if i.allocation_attribute_type.name in required_attrs:
            storage_request[i.allocation_attribute_type.name] = i.value

    # traverse the resource tree to get the storage attributes
    has_parent = True
    while has_parent:
        for r in resource.resourceattribute_set.iterator():
            if r.resource_attribute_type.name in required_attrs:
                storage_request[r.resource_attribute_type.name] = r.value
        if resource.parent_resource is not None:
            resource = resource.parent_resource
        else:
            has_parent = False

    assert required_attrs == set(storage_request.keys()), f"Missing required attributes: {required_attrs - set(storage_request.keys())}"

    # provision storage
    # check to see if view already exists: GET request to /api/latest/views?path={storage_path} and check if response is empty
    # if not, create view: POST to /api/latest/views with body {'path': storage_path, 'name': storage_path, 'tenant_id': vast_tenant_id}

    vc = VASTClient(storage_request['storage_host'], VASTUSER, VASTPASS)
    views = vc.get_views(path=storage_request['storage_path'])
    if views:
        view = views[0]
        # update view policy if necessary
        if view['policy_id'] != storage_request['view_policy_id']:
            raise NotImplementedError('Updating view policy is not yet supported')

    else:
        share_name = None # this is only necessary for SMB shares
        if storage_request['storage_protocol'] == 'SMB':
            share_name = storage_request['storage_path'].split('/')[-1] + '$'

        view = vc.add_view(storage_request['storage_path'], set(storage_request['storage_protocol']), share_name=share_name, policy_id=storage_request['view_policy_id'])

    # create the quota object with the requested attributes if it doesn't already exist. if it does, update it if necessary.
    quotas = vc.get_quotas(storage_request['storage_path'])
    if quotas:
        quota = quotas[0]
        if quota['limit'] != storage_request['Storage Quota (GB)']:
            vc.update_quota_size(quota['id'], gib_to_bytes(storage_request['Storage Quota (GB)']))
    else:
        quota_name = storage_request['storage_path'].split('/')[-1]
        quota = vc.add_quota(quota_name, storage_request['storage_path'], hard_limit=gib_to_bytes(storage_request['Storage Quota (GB)']))
    
    # create the folder object with the requested attributes if it doesn't already exist. if it does, update it if necessary.
    folder = vc.get_folder(storage_request['storage_path'])
    # TODO: verify value for non-existent folder
    if storage_request['storage_protocol'] == 'SMB':
        if not folder:
            vc.add_folder(storage_request['storage_path'], group=storage_request['storage_group_name'], owner_is_group=True)
        else:
            vc.modify_folder(storage_request['storage_path'], group=storage_request['storage_group_name'], owner_is_group=True)
    else:
        if not folder:
            vc.add_folder(storage_request['storage_path'], group=storage_request['storage_group_name'], user=pi, owner_is_group=False)
        else:
            vc.modify_folder(storage_request['storage_path'], group=storage_request['storage_group_name'], user=pi, owner_is_group=False)

    # create the protected path object for this path if it doesn't already exist. do we want to add snapshot policy as an allocation attribute?
    protected_paths = vc.get_protected_paths(storage_request['storage_path'])
    if protected_paths:
        pp = protected_paths[0]
        # update protection policy if necessary
        if pp['protection_policy_id'] != storage_request['protection_policy_id']:
            raise NotImplementedError('Updating protection policy is not yet supported')
    else:
        pp_name = storage_request['storage_path'].split('/')[-1] + '_proj_snap'
        # PROTECTION_POLICY_ID per 'volume' in VAST?
        vc.add_protected_path(pp_name, storage_request['storage_path'], storage_request['protection_policy_id'], storage_request['tenant_id'])
