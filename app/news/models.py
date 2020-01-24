from django.db import models


class News(models.Model):
    title = models.CharField(max_length=120)
    context = models.CharField(max_length=1000)
    timestamp = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='media/news/', blank=True, null=True)

    def __str__(self):
        return self.title
