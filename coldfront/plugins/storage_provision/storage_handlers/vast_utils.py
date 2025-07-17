from vast_api_client import VASTClient
from vast_api_client.utils import gib_to_bytes


def get_vast_client(vast_user=None, vast_pass=None):
    """
    Returns a VASTClient instance
    """
    return VASTClient(username=vast_user, password=vast_pass)

def create_or_update_view(vc, storage_path, storage_protocol, view_policy_id):
    views = vc.get_views(path=storage_path)
    if views:
        view = views[0]
        # update view policy if necessary
        if view['policy_id'] != view_policy_id:
            raise NotImplementedError('Updating view policy is not yet supported')

    else:
        share_name = None # this value is only valid for SMB shares
        if storage_protocol == 'SMB':
            share_name = storage_path.split('/')[-1] + '$'

        view = vc.add_view(storage_path, set(storage_protocol), share_name=share_name, policy_id=view_policy_id)
    return view


def create_or_update_quota(vc, storage_path, storage_quota):
    quotas = vc.get_quotas(storage_path)
    if quotas:
        quota = quotas[0]
        if quota['limit'] != storage_quota:
            vc.update_quota_size(quota['id'], gib_to_bytes(storage_quota))
    else:
        quota_name = storage_path.split('/')[-1]
        quota = vc.add_quota(quota_name, storage_path, hard_limit=gib_to_bytes(storage_quota))
    return quota


def create_or_update_protected_path(vc, storage_path, protection_policy_id, tenant_id):
    protected_paths = vc.get_protected_paths(storage_path)
    if protected_paths:
        pp = protected_paths[0]
        # update protection policy if necessary
        if pp['protection_policy_id'] != protection_policy_id:
            raise NotImplementedError('Updating protection policy is not yet supported')
    else:
        pp_name = storage_path.split('/')[-1] + '_proj_snap'
        vc.add_protected_path(pp_name, storage_path, protection_policy_id, tenant_id)
    return pp