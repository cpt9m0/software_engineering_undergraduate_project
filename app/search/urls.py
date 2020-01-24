from django.urls import path
from .views import general_search

app_name = 'search'

urlpatterns = [
    path('', general_search, name='general_search'),
]
