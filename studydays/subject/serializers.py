from dataclasses import Field
from rest_framework import serializers
from .models import Subject

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'user', 'subject', 'color']
    