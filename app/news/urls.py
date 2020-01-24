from django.urls import path
from .News import get_news, get_news_detail

app_name = 'news'
urlpatterns = [
    path('get-all-news/', get_news, name='get_news'),
    path(
        'get-news-detail/<int:news_id>/',
        get_news_detail,
        name='get_news_detail'
        ),
]
