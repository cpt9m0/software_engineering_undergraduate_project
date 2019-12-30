from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser

from .models import University, UniversityRate, Department
from .serializers import UniversitySerializer, UniversityRateSerializer,\
    DepartmentSerializer


@csrf_exempt
def get_universities(request):
    """
    List all universities
    """
    if request.method == 'GET':
        universities = University.objects.all()
        serializer = UniversitySerializer(universities, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def get_top_universities(request):
    """
    List top universities order by overall_score
    """
    if request.method == 'GET':
        top_rates = UniversityRate.objects.all().order_by('-overall_score')
        top_universities = University.objects.filter(
            id__in=[rate.university.id for rate in top_rates]
            )
        serializer = UniversitySerializer(top_universities, many=True)
        return JsonResponse(serializer.data, safe=False)


def get_rates(request, university_id):
    """
    Get university rates by its id,
    or create a new one
    """
    try:
        university = University.objects.get(id=university_id)
    except University.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        rates = UniversityRate.objects.filter(university=university)
        serializer = UniversityRateSerializer(rates, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        user = request.user
        if user.is_authenticated and \
                user.is_active and \
                (not user.is_professor):
            data = JSONParser().parse(request)
            data['university'] = university.id
            data['user'] = user.username
            serializer = UniversityRateSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            return JsonResponse(serializer.errors, status=400)
        else:
            return JsonResponse(
                    {'errors': ['User is not authenticated'], },
                    status=403
                    )
    else:
        return JsonResponse({'result': False})


@csrf_exempt
def get_departments(request, university_id):
    """
    Get university departments by its id,
    or create a new one
    """
    try:
        university = University.objects.get(id=university_id)
    except University.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        departments = Department.objects.filter(university=university)
        serializer = DepartmentSerializer(departments, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        data['university'] = university.id
        serializer = DepartmentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
