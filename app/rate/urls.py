from django.urls import path
from rate import University

app_name = 'rate'
urlpatterns = [
    path(
        'get-all-universities/',
        University.get_universities,
        name='get_universities'
        ),
    path(
        'get-university-rates/<int:university_id>/',
        University.get_rates,
        name='get_rates'
        ),
    path(
        'get-university-departments/<int:university_id>/',
        University.get_departments,
        name='get_departments'
    ),
    path(
        'get-top-universities/',
        University.get_top_universities,
        name='get_top_universities'
        ),
]
