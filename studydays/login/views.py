from datetime import datetime
from http.client import HTTPResponse
from urllib import response
from django.shortcuts import render
from django.http import HttpResponse
from login import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from . import models
from .serializers import UserSerializer
import jwt, datetime

# Create your views here.
class register(APIView):
    def post(self, request):
        serializers = UserSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data)

class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        
        user = models.User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User is not found!')
        if not user.check_password(password):
            raise AuthenticationFailed('Incorrect Password!')
        
        payload = {
            'id' : user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat' : datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()
        
        response.set_cookie(key = 'jwt', value = 'token', httponly = True)
        response.data = {
            'username' : models.User.objects.values_list("username", flat=True).filter(email=email)[0],
            'jwt' : token
        }
        return response

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message' : 'success'
        }
        return response