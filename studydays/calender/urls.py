from . import views
from django.urls import path,include

urlpatterns = [
    path('calender',views.EventView.as_view())
]