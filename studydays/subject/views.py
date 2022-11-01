from django.shortcuts import render
from django.shortcuts import render
from calender.token import decode_access_token
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import get_authorization_header
from rest_framework import status
from . import models
from .serializers import SubjectSerializer

# Create your views here.
class SubjectView(APIView):
    def post(self, request, format = None):
        serializers = SubjectSerializer(data=request.data)
        serializers.is_valid(raise_exception=True)
        serializers.save()
        return Response(serializers.data)

    def get(self, request, format = None):
        auth = get_authorization_header(request).split()

        if auth and len(auth)==2:
            token = auth[1].decode('utf-8')
            id = decode_access_token(token)

        
        serializers = SubjectSerializer(models.Subject.objects.get_all_subjects(user=id), many = True)
        return Response(serializers.data)

class SubjectManager(APIView):
    def get_object(self, pk):
        try:
            return models.Subject.objects.get(pk=pk)
        except models.Subject.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):

        serializers = SubjectSerializer(self.get_object(pk))
        return Response(serializers.data)
    
    def put(self, request, pk, format=None):
        subject = self.get_object(pk)
        serializer = SubjectSerializer(subject, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
    def delete(self,request, pk, format=None):
        
        subject = self.get_object(pk)
        subject.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)