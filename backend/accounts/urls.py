from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('login/', obtain_auth_token, name='login'),
    path('register/', views.register_user, name='register'),
    path('verify-registration-id/', views.verify_registration_id, name='verify-registration-id'),
]
