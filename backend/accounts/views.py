from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import RegistrationID, UserProfile

# Create your views here.

@api_view(['POST'])
@permission_classes([AllowAny])
def verify_registration_id(request):
    reg_id = request.data.get('registration_id')
    if not reg_id:
        return Response({'error': 'Registration ID is required'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        registration = RegistrationID.objects.get(registration_id=reg_id)
        if registration.is_used:
            return Response({'error': 'This registration ID has already been used'}, 
                          status=status.HTTP_400_BAD_REQUEST)
        return Response({'valid': True}, status=status.HTTP_200_OK)
    except RegistrationID.DoesNotExist:
        return Response({'error': 'Invalid registration ID'}, 
                       status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    reg_id = request.data.get('registration_id')
    
    if not all([username, password, reg_id]):
        return Response({'error': 'All fields are required'}, 
                       status=status.HTTP_400_BAD_REQUEST)
    
    try:
        registration = RegistrationID.objects.get(registration_id=reg_id)
        if registration.is_used:
            return Response({'error': 'This registration ID has already been used'}, 
                          status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, 
                          status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.create_user(username=username, password=password)
        registration.is_used = True
        registration.used_by = user
        registration.save()
        
        UserProfile.objects.create(user=user, registration_id=registration)
        
        return Response({'message': 'User registered successfully'}, 
                       status=status.HTTP_201_CREATED)
        
    except RegistrationID.DoesNotExist:
        return Response({'error': 'Invalid registration ID'}, 
                       status=status.HTTP_400_BAD_REQUEST)
