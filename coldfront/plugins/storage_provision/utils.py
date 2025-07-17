import importlib.util
import inspect
from pathlib import Path
import logging
from coldfront.core.allocation.models import Allocation
from coldfront.core.resource.models import Resource
from coldfront.plugins.storage_provision.base_storage_handler import StorageHandler

logger = logging.getLogger(__name__)

def lazy_load_module(module_name: str):
    """
    lazy load a module. 
    :param module_name: name of module to load
    :return: module
    """
    if module_name is None:
        raise ValueError('module_name must be provided')
    
    try:
        return importlib.import_module(module_name)
    except ImportError as exc:
        logger.warning("Module '%s' not found", module_name)
        # reraise the exception
        raise exc


def load_module_from_path(module_name: str, location: Path):
    """    Load a module from a specific file path.
    """
    try:
        spec = importlib.util.spec_from_file_location(module_name, location.as_posix())
        module = importlib.util.module_from_spec(spec)
        return spec.loader.exec_module(module)
    except Exception as exc:
        logger.warning("Module '%s' not found at %s", module_name, location)
        raise ValueError(f"Module '{module_name}' not found at {location}") from exc


def find_storage_handler(module) -> type:
    """
    Find the storage handler class in the given module.
    :param module: the module to search for the storage handler
    :return: class that implements the storage handler for the given storage type
    """
    for _, cls in inspect.getmembers(module, inspect.isclass):
        if issubclass(cls, StorageHandler) and cls.__module__ == module.__name__:
            return cls

    raise ValueError(f"No StorageHandler subclass found in {module.__name__}")


def validate_allocation_active(allocation: Allocation):
    if allocation.status.name != 'Active':
        raise ValueError('Allocation must be Active to provision storage')
    elif not allocation.project.pi.is_active:
        raise ValueError('PI must be Active to provision storage')
    else:
        return True


def get_root_resource_from_allocation(allocation: Allocation) -> Resource:
    """
    Get the root resource of the allocation.
    """
    resource = allocation.get_parent_resource
    while resource.parent_resource is not None:
        resource = resource.parent_resource
    return resource


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
            # this means that you can override the parent resource attributes in any child resource or allocation attribute
            if r.resource_attribute_type.name in required_attrs and r.resource_attribute_type.name not in allocation_attributes:
                allocation_attributes[r.resource_attribute_type.name] = r.value
        if resource.parent_resource is not None:
            resource = resource.parent_resource
        else:
            has_parent = False
    return allocation_attributes


def validate_required_attributes(allocation_attributes: dict, required_attrs: set[str]) -> None:
    """    Validate that the allocation attributes dict has all the required attributes for action.
    """
    if required_attrs != set(allocation_attributes.keys()):
        raise ValueError(f"Missing required attributes: {required_attrs - set(allocation_attributes.keys())}")


def convert_to_bytes(s):
    s = s.strip().lower().replace(' ', '')
    if len(s) < 3:
        raise ValueError('String must be at least 3 characters long')
    # recognize kb, mb, gb, tb, kib, mib, gib, tib suffixes
    base10 = {'kb': 10**3, 'mb': 10**6, 'gb': 10**9, 'tb': 10**12}
    base2 = {'kib': 2**10, 'mib': 2**20, 'gib': 2**30, 'tib': 2**40}
    num_val = ''
    multiplier = 1
    if s[-2:] == 'ib' and s[-3:] in base2:
        multiplier = base2[s[-3:]]
        num_val = s[:-3]
    elif s[-1:] == 'b' and s[-2:] in base10:
        multiplier = base10[s[-2:]]
        num_val = s[:-2]
    else:
        raise ValueError(f"Invalid size suffix in: {s}")
    return int(float(num_val) * multiplier)


def bytes_to_human_readable(size, base=10):
    if isinstance(size, int) and size >= 0:
        pass
    elif size.isdigit() and size.isascii():
        size = int(size)
    else:
        raise ValueError('size must be a positive integer numeric value')
    
    if base == 10:
        suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']
        divisor = 1000
    elif base == 2:
        suffixes = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB']
        divisor = 1024
    else:
        raise ValueError('base must be 2 or 10')
    for suffix in suffixes:
        if size < divisor:
            if suffix == 'B':
                return f"{size} {suffix}"
            return f"{size:.2f} {suffix}"
        size /= divisor
    return f"{size:.2f} {suffixes[-1]}"