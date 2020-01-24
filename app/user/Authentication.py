from django.contrib.auth import logout as _logout
from django.http import JsonResponse

from rest_framework.decorators import api_view


@api_view(['GET'])
def logout(request):
    if request.user.is_authenticated:
        _logout(request)
        return JsonResponse({'result': True})
    else:
        return JsonResponse({'result': False})
