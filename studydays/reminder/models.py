from django.db import models
from login.models import User
# Create your models here.

class ReminderManager(models.Manager):
    """ Reminder manager """

    def get_all_reminder(self, user):
        reminder = Reminder.objects.filter(user=user)
        return reminder


class Reminder(models.Model):
    """ Reminder model """

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reminders")
    reminder = models.CharField(max_length=200)
    objects = ReminderManager()
    
    def __str__(self):
        return self.reminder
