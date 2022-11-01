from django.db import models
from django.db import models
from login.models import User


class SubjectManager(models.Manager):
    """ Subject manager """

    def get_all_subjects(self, user):
        subjects = Subject.objects.filter(user=user)
        return subjects


class Subject(models.Model):
    """ Subject model """

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="subjects")
    subject = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    objects = SubjectManager()
    
    def __str__(self):
        return self.subject
