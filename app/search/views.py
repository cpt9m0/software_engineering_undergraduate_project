from django.http import JsonResponse
from django.db.models import Q
from rest_framework.decorators import api_view

from rate.models import University
from user.models import CustomUser


@api_view(['GET'])
def general_search(request):
    q = request.GET.get('q', None)
    if not q:
        return JsonResponse({'detail': 'Please set q to search'})
    university_qs = University.objects.filter(name__contains=q).values()
    professor_qs = CustomUser.objects.filter(
        is_professor=True, is_active=True
        ).filter(
            Q(first_name__contains=q) | Q(last_name__contains=q)
        ).values(
            'username', 'email', 'first_name', 'last_name', 'profile_photo'
            )
    return JsonResponse({
        'result': {
            'universities': list(university_qs),
            'professors': list(professor_qs)
        }})
