from datetime import datetime
from django.db import models
from django.urls import reverse
from login.models import User


class EventManager(models.Manager):
    """ Event manager """

    def get_all_events(self, user):
        events = Event.objects.filter(user=user)
        return events


class Event(models.Model):
    """ Event model """

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="events")
    title = models.CharField(max_length=200, unique = True)
    start = models.CharField(max_length=200)
    end = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    objects = EventManager()
    
    def __str__(self):
        return self.title