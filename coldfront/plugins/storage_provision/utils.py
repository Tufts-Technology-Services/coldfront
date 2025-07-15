import importlib.util
import sys
from coldfront.core.allocation.models import Allocation
from coldfront.core.utils.common import import_from_settings


def validate_allocation_active(allocation):
    if allocation.status.name != 'Active':
        raise ValueError('Allocation must be Active to provision storage')
    elif not allocation.project.pi.is_active:
        raise ValueError('PI must be Active to provision storage')
    else:
        return True


def is_storage(allocation: Allocation) -> bool:
    """
    Check if the allocation's parent resource is a storage resource.
    """
    return allocation.get_parent_resource.resource_type.name == 'Storage'


def get_allocation_attributes(allocation: Allocation, required_attrs: set[str] = None) -> dict:

    allocation_attributes = {}
    
    # get the allocation attributes
    for i in allocation.allocationattribute_set.iterator():
        if required_attrs is None or i.allocation_attribute_type.name in required_attrs:
            allocation_attributes[i.allocation_attribute_type.name] = i.value

    # traverse the resource tree to get the storage attributes
    resource = allocation.get_parent_resource
    has_parent = True
    while has_parent:
        for r in resource.resourceattribute_set.iterator():
            # if the attribute is in the required attributes, add it to the allocation attributes, unless it is already present
            # this means that you can override the parent resource attributes
            if r.resource_attribute_type.name in required_attrs and r.resource_attribute_type.name not in allocation_attributes:
                allocation_attributes[r.resource_attribute_type.name] = r.value
        if resource.parent_resource is not None:
            resource = resource.parent_resource
        else:
            has_parent = False
    return allocation_attributes


def validate_required_attributes(allocation_attributes: dict, required_attrs: set[str]) -> None:
    """    Validate that the allocation attributes dict has all the required attributes for storage provisioning.
    """
    if required_attrs != set(allocation_attributes.keys()):
        raise ValueError(f"Missing required attributes: {required_attrs - set(allocation_attributes.keys())}")


def get_allocation_group_name(allocation: Allocation) -> str:
    """
    Get the group name for the allocation.
    If USE_PROJECT_GROUP_FOR_STORAGE is True, return the project group name.
    Otherwise, return the storage group name from the allocation attributes.
    """
    USE_PROJECT_GROUP_FOR_STORAGE = import_from_settings('USE_PROJECT_GROUP_FOR_STORAGE', False)
    
    if USE_PROJECT_GROUP_FOR_STORAGE:
        if not allocation.project.group:
            raise ValueError('Project must have a group to provision storage')
        return allocation.project.group.name
    else:
        return get_allocation_attributes(allocation, {'storage_group_name'}).get('storage_group_name')
    

def load_module(source, module_name):
    """
    reads file source and loads it as a module

    :param source: file to load
    :param module_name: name of module to register in sys.modules
    :return: loaded module
    """

    if module_name is None:
        raise ValueError('module_name must be provided')

    spec = importlib.util.spec_from_file_location(module_name, source)
    module = importlib.util.module_from_spec(spec)
    sys.modules[module_name] = module
    spec.loader.exec_module(module)

    return module