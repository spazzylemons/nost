

# Create your models here.
# backend_django/nostAPIs/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    pass

class UserPost(models.Model):
    text = models.TextField()
    time = models.DateTimeField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    # sentiment
    neg = models.FloatField()
    neu = models.FloatField()
    pos = models.FloatField()
    compound = models.FloatField()
