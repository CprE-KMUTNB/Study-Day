from turtle import home
from django.http import HttpResponse
from django.urls import path
from . import views

urlpatterns=[
    path('',views.home,name='home'),
]