from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

from news.models import News
from news.serializers import NewsSerializer


@csrf_exempt
def get_news(request):
    """
    List all news
    """
    if request.method == 'GET':
        news = News.objects.all()
        serializer = NewsSerializer(news, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def get_news_detail(request, news_id):
    """
    Get one news with id
    """
    try:
        news = News.objects.get(id=news_id)
    except News.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = NewsSerializer(news)
        return JsonResponse(serializer.data, safe=False)
