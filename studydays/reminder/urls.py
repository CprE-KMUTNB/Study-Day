from . import views
from django.urls import path,include
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('reminder/',views.ReminderView.as_view()),
    path('reminder/<int:pk>/',views.ReminderManager.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)