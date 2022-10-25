from datetime import datetime
from http.client import HTTPResponse
from urllib import response
from winreg import QueryValue
from django.shortcuts import render
from django.http import HttpResponse
from login.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import get_authorization_header
from . import models
from .serializers import EventSerializer
from corsheaders.defaults import default_headers
# Create your views here.
class EventView(APIView):
    def post(self, request):
        serializers = EventSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data)

    def get(self, request):
        serializers = EventSerializer(models.Event.objects.all(), many = True)
        return Response(serializers.data)
