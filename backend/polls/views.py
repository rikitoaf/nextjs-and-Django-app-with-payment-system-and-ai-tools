from django.shortcuts import render

from rest_framework import viewsets
from .models import Poll, Option
from .serializers import PollSerializer, OptionSerializer

class PollViewSet(viewsets.ModelViewSet):
    queryset = Poll.objects.all()
    serializer_class = PollSerializer

class OptionViewSet(viewsets.ModelViewSet):
    queryset = Option.objects.all()
    serializer_class = OptionSerializer