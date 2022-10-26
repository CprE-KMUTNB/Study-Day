from . import views
from django.urls import path,include
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('calender/',views.EventView.as_view()),
    path('calender/<int:pk>/',views.EventManager.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)