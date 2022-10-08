from . import views
from django.urls import path,include

urlpatterns = [
    path('register',views.register.as_view()),
    path('login', views.LoginView.as_view()),
    path('logout', views.LogoutView.as_view())
]