from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

class RegistrationID(models.Model):
    registration_id = models.CharField(max_length=20, unique=True)
    is_used = models.BooleanField(default=False)
    used_by = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.registration_id} - {'Used' if self.is_used else 'Available'}"

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    registration_id = models.OneToOneField(RegistrationID, on_delete=models.PROTECT, null=True, blank=True)
    bio = models.TextField(blank=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)

    def __str__(self):
        return f'{self.user.username} Profile'

    def clean(self):
        if self.registration_id and self.registration_id.is_used and self.registration_id.used_by != self.user:
            raise ValidationError("This registration ID is already in use.")