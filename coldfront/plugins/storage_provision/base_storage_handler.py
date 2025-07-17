from coldfront.core.allocation.models import Allocation
from coldfront.core.utils.common import import_from_settings
from coldfront.plugins.storage_provision.utils import get_allocation_attributes, get_root_resource_from_allocation


STORAGE_USE_PROJECT_GROUP = import_from_settings('STORAGE_USE_PROJECT_GROUP', False)

class StorageHandler:
    """
    Base class for storage handlers.
    This class should be extended by specific storage handler implementations.
    """

    def __init__(self, allocation: Allocation):
        self.allocation = allocation

    def provision_storage(self):
        """
        Provision storage for the given allocation.
        This method should be implemented by subclasses.
        """
        raise NotImplementedError("Subclasses must implement this method.")

    def deprovision_storage(self):
        """
        Deprovision storage for the given allocation.
        This method should be implemented by subclasses.
        """
        raise NotImplementedError("Subclasses must implement this method.")
    
    def update_storage(self):
        """
        Update storage for the given allocation.
        This method should be implemented by subclasses.
        """
        raise NotImplementedError("Subclasses must implement this method.")

    def is_storage(self) -> bool:
        """
        Check if the allocation's parent resource is a storage resource.
        """
        return get_root_resource_from_allocation(self.allocation).resource_type.name == 'Storage'

    def get_allocation_group_name(self) -> str:
        """
        Get the group name for the allocation.
        If USE_PROJECT_GROUP_FOR_STORAGE is True, return the project group name.
        Otherwise, return the storage group name from the allocation attributes.
        """
    
        if STORAGE_USE_PROJECT_GROUP:
            if not self.allocation.project.group:
                raise ValueError('Project must have a group to provision storage')
            return self.allocation.project.group.name
        else:
            return get_allocation_attributes(self.allocation, {'storage_group_name'}).get('storage_group_name')