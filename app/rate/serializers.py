from rest_framework.validators import UniqueTogetherValidator
from rest_framework import serializers

from rate.models import Tag, Location, University,\
    UniversityRate, Department, Course, ProfessorRate


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'x', 'y', 'stringLocation']


class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University
        fields = ['id', 'name', 'location', 'image']


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'university', 'name']


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'professor']


class ProfessorRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfessorRate
        fields = [
            'id', 'user', 'professor', 'likes', 'dislikes', 'overall_score',
            'comment', 'total_score', 'difficaullty', 'quality',
            'grade_rate', 'notebook', 'attendance', 'tags'
            ]
        validators = [
            UniqueTogetherValidator(
                queryset=ProfessorRate.objects.all(),
                fields=['user', 'professor']
            )
        ]


class UniversityRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UniversityRate
        fields = [
            'id', 'university', 'user', 'likes', 'dislikes', 'overall_score',
            'comment', 'total_score', 'food_rate', 'security_rate',
            'location_rate', 'facility_rate', 'internet_rate'
        ]
        validators = [
            UniqueTogetherValidator(
                queryset=UniversityRate.objects.all(),
                fields=['user', 'university']
            )
        ]
