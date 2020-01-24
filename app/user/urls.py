from django.urls import path
from user import User, Professor, Authentication

app_name = 'user'
urlpatterns = [
    path(
        'logout/',
        Authentication.logout,
        name='logout'),
    path(
        'login-user/',
        User.login_user,
        name='login_user'
        ),
    path(
        'login-professor/',
        Professor.login_professor,
        name='login_professor'
        ),
    path(
        'register-professor/',
        Professor.register_professor,
        name='register_professor'
        ),
    path(
        'register-user/',
        User.register_user,
        name='register_user'
        ),
    path(
        'get-professors/',
        Professor.get_professors,
        name='get_professors'
        ),
    path(
        'get-top-professors/',
        Professor.get_top_professors,
        name='get_top_professors'),
    path(
        'get-courses/<int:professor_id>/',
        Professor.get_courses,
        name='get_courses'),
    path(
        'get-rates/<int:professor_id>/',
        Professor.get_rates,
        name='get_rates'
        ),
]
