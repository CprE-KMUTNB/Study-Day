from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    username = None
    email = models.EmailField(max_length = 255, unique=True)
    name = models.CharField(max_length = 255)
    surname = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'surname', 'password']
    def __str__(self):
        return self.Name+' '+self.surname
