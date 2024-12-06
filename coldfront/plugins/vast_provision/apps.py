from django.apps import AppConfig

from coldfront.core.utils.common import import_from_settings

VASTUSER = import_from_settings('VASTUSER')
VASTPASS = import_from_settings('VASTPASS')

class VASTConfig(AppConfig):
    name = 'coldfront.plugins.vast_provision'
