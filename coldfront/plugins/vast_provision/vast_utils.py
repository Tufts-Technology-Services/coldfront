from vast_api_client.utils import gib_to_bytes


def create_or_update_view(vc, storage_path, storage_protocol, view_policy_id):
    views = vc.get_views(path=storage_path)
    if views:
        view = views[0]
        # update view policy if necessary
        if view['policy_id'] != view_policy_id:
            raise NotImplementedError('Updating view policy is not yet supported')

    else:
        share_name = None # this is only necessary for SMB shares
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


def create_or_update_folder(vc, storage_path, storage_group_name, storage_protocol, pi):
    # create the folder object with the requested attributes if it doesn't already exist. if it does, update it if necessary.
    folder = vc.get_folder(storage_path)
    # TODO: verify value for non-existent folder
    if storage_protocol == 'SMB':
        if not folder:
            vc.add_folder(storage_path, group=storage_group_name, owner_is_group=True)
        else:
            vc.modify_folder(storage_path, group=storage_group_name, owner_is_group=True)
    else:
        if not folder:
            vc.add_folder(storage_path, group=storage_group_name, user=pi, owner_is_group=False)
        else:
            vc.modify_folder(storage_path, group=storage_group_name, user=pi, owner_is_group=False)


def create_or_update_protected_path(vc, storage_path, protection_policy_id, tenant_id):
    protected_paths = vc.get_protected_paths(storage_path)
    if protected_paths:
        pp = protected_paths[0]
        # update protection policy if necessary
        if pp['protection_policy_id'] != protection_policy_id:
            raise NotImplementedError('Updating protection policy is not yet supported')
    else:
        pp_name = storage_path.split('/')[-1] + '_proj_snap'
        # PROTECTION_POLICY_ID per 'volume' in VAST?
        vc.add_protected_path(pp_name, storage_path, protection_policy_id, tenant_id)
    return pp