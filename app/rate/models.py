from django.db import models
from django.db.models.signals import pre_save
from user.models import CustomUser


class TagManager(models.Manager):
    def get_or_create(self, name):
        tag = None
        try:
            tag = self.get(name=name)
            return tag
        except Tag.DoesNotExist:
            tag = self.create(name=name)
            return tag


class Tag(models.Model):
    name = models.CharField(max_length=120)

    objects = TagManager()

    def __str__(self):
        return self.name


class Location(models.Model):
    x = models.DecimalField(
        decimal_places=20,
        max_digits=30,
        blank=True,
        null=True
        )
    y = models.DecimalField(
        decimal_places=20,
        max_digits=30,
        blank=True,
        null=True
        )
    stringLocation = models.CharField(max_length=250)

    def __str__(self):
        return str(self.stringLocation)


class University(models.Model):
    name = models.CharField(max_length=128)
    location = models.ForeignKey(
        Location,
        on_delete=models.CASCADE,
        related_name='location'
        )
    image = models.ImageField(
        upload_to='media/universities',
        blank=True,
        null=True
        )

    def __str__(self):
        return self.name


class Department(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name


class Course(models.Model):
    name = models.CharField(max_length=120)
    professor = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name + " : " + str(self.professor)


class ProfessorRate(models.Model):
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='user'
        )
    professor = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='professor'
        )
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    comment = models.TextField(blank=True, null=True)
    total_score = models.IntegerField(default=1)
    difficaullty = models.IntegerField(default=0)
    quality = models.IntegerField(default=0)
    grade_rate = models.IntegerField(default=0)
    overall_score = models.DecimalField(
        max_digits=2,
        decimal_places=1,
        default=0.0
        )
    notebook = models.BooleanField(default=False)
    attendance = models.BooleanField(default=True)
    timestamp = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(
        Tag,
        related_name='tags',
        related_query_name='tags',
        blank=True
        )

    def __str__(self):
        return "User: {} --> Professor: {}".format(self.user, self.professor)


class UniversityRate(models.Model):
    university = models.ForeignKey(University, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    comment = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now=True)
    overall_score = models.DecimalField(
        max_digits=2,
        decimal_places=1,
        default=0.0
        )
    total_score = models.IntegerField(default=0)
    food_rate = models.IntegerField(default=0)
    security_rate = models.IntegerField(default=0)
    location_rate = models.IntegerField(default=0)
    facility_rate = models.IntegerField(default=0)
    internet_rate = models.IntegerField(default=0)

    def __str__(self):
        return "User: {} --> University: {}".format(self.user, self.university)


# Signals
def caculate_professor_overall_score(sender, instance, *args, **kwargs):
    sum_ = instance.total_score + instance.difficaullty +\
         instance.quality + instance.grade_rate
    instance.overall_score = sum_ / 4


def caculate_university_overall_score(sender, instance, *args, **kwargs):
    sum_ = instance.total_score + instance.food_rate +\
            instance.security_rate + instance.location_rate +\
            instance.facility_rate + instance.internet_rate
    instance.overall_score = sum_ / 6


pre_save.connect(caculate_university_overall_score, sender=UniversityRate)
pre_save.connect(caculate_professor_overall_score, sender=ProfessorRate)
