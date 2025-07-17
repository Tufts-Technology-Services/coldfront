

from coldfront.plugins.storage_provision.base_storage_handler import StorageHandler
from coldfront.core.utils.common import import_from_settings

VASTUSER = import_from_settings('VASTUSER')
VASTPASS = import_from_settings('VASTPASS')


class VastProjectStorageHandler(StorageHandler):
    """
    Handler for Vast Project Storage.
    """
    def provision_storage(self):
        # Logic to provision storage for Vast Project
        pass

    def update_storage(self):
        # Logic to update storage for Vast Project
        pass

    def delete_storage(self):
        # Logic to delete storage for Vast Project
        pass

    def deprovision_storage(self):
        # Logic to deprovision storage for Vast Project
        pass
