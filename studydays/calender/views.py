from ast import Delete
from datetime import datetime
from http.client import HTTPResponse
from urllib import response
from django.shortcuts import render
from django.http import Http404
from calender.token import decode_access_token
from login.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import get_authorization_header
from rest_framework import status
from . import models
from .serializers import EventSerializer

# Create your views here.
class EventView(APIView):
    def post(self, request, format = None):
        serializers = EventSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data)

    def get(self, request, format = None):
        auth = get_authorization_header(request).split()

        if auth and len(auth)==2:
            token = auth[1].decode('utf-8')
            id = decode_access_token(token)

        
        serializers = EventSerializer(models.Event.objects.get_all_events(user=id), many = True)
        return Response(serializers.data)

class EventManager(APIView):
    def get_object(self, pk):
        try:
            return models.Event.objects.get(pk=pk)
        except models.Event.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):

        serializers = EventSerializer(self.get_object(pk))
        return Response(serializers.data)
    
    def put(self, request, pk, format=None):
        event = self.get_object(pk)
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
    def delete(self,request, pk, format=None):
        
        event = self.get_object(pk)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)