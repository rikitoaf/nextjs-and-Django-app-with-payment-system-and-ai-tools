from django.shortcuts import render
from rest_framework import viewsets
from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework.pagination import PageNumberPagination

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    pagination_class = PageNumberPagination

# Create your views here.
