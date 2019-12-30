from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth import login as _login
from django.contrib.auth import get_user_model

from rest_framework.parsers import JSONParser

from rate.models import Course, ProfessorRate
from rate.serializers import CourseSerializer, ProfessorRateSerializer
from user.serializers import CustomUserCreateSerializer,\
    CustomUserReadSerializer

User = get_user_model()


@csrf_exempt
def login_professor(request):
    """
    Login professor(kind of user)
    """
    if request.method == 'POST':
        data = JSONParser().parse(request)
        username = int(data.get('username'))
        password = data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            if user.is_professor and user.is_active:
                _login(request, user)

        if user.is_authenticated:
            return JsonResponse({'result': True})

        return JsonResponse({'result': False})


@csrf_exempt
def register_professor(request):
    """
    register professor(kind of user)
    """
    if request.method == 'POST':
        data = JSONParser().parse(request)
        data['is_professor'] = True
        serializer = CustomUserCreateSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def get_professors(request):
    """
    List all active professors
    """
    if request.method == 'GET':
        professors = User.objects.filter(is_professor=True, is_active=True)
        serializer = CustomUserReadSerializer(professors, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def get_top_professors(request):
    """
    List top professors order by overall score
    """
    if request.method == 'GET':
        top_rates = ProfessorRate.objects.all().order_by('-overall_score')
        top_professors = User.objects.filter(
            username__in=[rate.professor.username for rate in top_rates]
            )
        serializer = CustomUserReadSerializer(top_professors, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def get_courses(request, professor_id):
    """
    List all courses of a professor with professor id,
    Or create a new one
    """
    try:
        professor = User.objects.get(username=professor_id)
    except User.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        courses = Course.objects.filter(professor=professor)
        serializer = CourseSerializer(courses, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        user = request.user
        if user.is_authenticated:
            if user.username == professor_id:
                data = JSONParser().parse(request)
                data['professor'] = professor_id
                serializer = CourseSerializer(data=data)
                if serializer.is_valid():
                    serializer.save()
                    return JsonResponse(serializer.data, status=201)
                return JsonResponse(serializer.errors, status=400)
        return JsonResponse({
            "errors": ["User is not authenticated", ],
        })


@csrf_exempt
def get_rates(request, professor_id):
    """
    List all rates of a professor with its id,
    Or create a new one
    """
    try:
        professor = User.objects.get(username=professor_id)
    except User.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        rates = ProfessorRate.objects.filter(professor=professor)
        serializer = ProfessorRateSerializer(rates, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        user = request.user
        if user.is_authenticated and\
            user.is_active and\
                (not user.is_professor):
            data = JSONParser().parse(request)
            data['professor'] = professor_id
            data['user'] = user.username
            serializer = ProfessorRateSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
            return JsonResponse(serializer.errors, status=400)
        return JsonResponse({
            "errors": ["User is not authenticated", ],
        })
