

# Create your models here.
# backend_django/nostAPIs/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    pass

class UserPost(models.Model):
    # message
    text = models.TextField()
    # location
    lat = models.FloatField()
    long = models.FloatField()
    # time of posting
    time = models.DateTimeField()
    # user who posted
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    # address
    street1 = models.CharField(max_length=100)
    street2 = models.CharField(max_length=100, blank=True)
    town = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=5)

