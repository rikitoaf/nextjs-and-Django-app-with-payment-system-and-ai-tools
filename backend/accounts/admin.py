from django.contrib import admin
from django.urls import path
from django.shortcuts import render, redirect
from django.contrib import messages
import csv
from io import TextIOWrapper
from .models import UserProfile, RegistrationID

class RegistrationIDAdmin(admin.ModelAdmin):
    list_display = ('registration_id', 'is_used', 'used_by', 'created_at')
    search_fields = ('registration_id', 'used_by__username')
    list_filter = ('is_used',)
    
    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('upload-csv/', self.upload_csv, name='upload-registration-ids'),
        ]
        return custom_urls + urls
    
    def upload_csv(self, request):
        if request.method == 'POST':
            csv_file = request.FILES.get('csv_file')
            if not csv_file:
                messages.error(request, 'Please upload a CSV file.')
                return redirect('..')
            
            if not csv_file.name.endswith('.csv'):
                messages.error(request, 'File is not CSV type.')
                return redirect('..')
                
            file_data = TextIOWrapper(csv_file.file, encoding='utf-8')
            csv_data = csv.reader(file_data)
            
            # Skip header row if it exists
            next(csv_data, None)
            
            success_count = 0
            error_count = 0
            
            for row in csv_data:
                try:
                    reg_id = row[0].strip()
                    if reg_id and not RegistrationID.objects.filter(registration_id=reg_id).exists():
                        RegistrationID.objects.create(registration_id=reg_id)
                        success_count += 1
                except Exception as e:
                    error_count += 1
                    continue
            
            messages.success(request, f'Successfully added {success_count} registration IDs. {error_count} errors.')
            return redirect('..')
            
        return render(request, 'admin/csv_upload.html')

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'registration_id')
    search_fields = ('user__username', 'registration_id__registration_id')

admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(RegistrationID, RegistrationIDAdmin)