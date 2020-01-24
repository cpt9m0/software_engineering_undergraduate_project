from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    username = models.IntegerField(primary_key=True, unique=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=120, blank=True, null=True)
    last_name = models.CharField(max_length=120, blank=True, null=True)
    profile_photo = models.ImageField(
        upload_to='media/profiles',
        blank=True,
        null=True
        )
    is_professor = models.BooleanField('Professor status', default=False)

    def __str__(self):
        if self.first_name and self.last_name:
            return self.first_name + " " + self.last_name
        elif self.first_name:
            return self.first_name
        elif self.last_name:
            return self.last_name
        else:
            return self.email
