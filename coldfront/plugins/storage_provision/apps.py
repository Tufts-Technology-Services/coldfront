from django.apps import AppConfig

from coldfront.core.utils.common import import_from_settings

VASTUSER = import_from_settings('VASTUSER')
VASTPASS = import_from_settings('VASTPASS')

class StorageProvisionConfig(AppConfig):
    name = 'coldfront.plugins.storage_provision'
