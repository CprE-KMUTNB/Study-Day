from . import views
from django.urls import path,include
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('subject/',views.SubjectView.as_view()),
    path('subject/<int:pk>/',views.SubjectManager.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)