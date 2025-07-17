from django.apps import AppConfig

from coldfront.core.utils.common import import_from_settings



class StorageProvisionConfig(AppConfig):
    name = 'coldfront.plugins.storage_provision'
