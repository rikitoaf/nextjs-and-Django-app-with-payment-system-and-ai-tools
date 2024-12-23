from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PollViewSet, OptionViewSet

router = DefaultRouter()
router.register(r'polls', PollViewSet)
router.register(r'polls/(?P<poll_pk>\d+)/options', OptionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]