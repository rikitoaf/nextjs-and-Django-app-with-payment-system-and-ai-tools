from rest_framework import viewsets, permissions
from .models import Poll, Option
from .serializers import PollSerializer, OptionSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class OptionViewSet(viewsets.ModelViewSet):
    # ... existing code ...



    """
    This viewset provides 'list', 'create', 'retrieve', 'update', 'partial_update', 
    and 'destroy' actions for options.
    """
    queryset = Option.objects.all()
    serializer_class = OptionSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        poll_id = self.kwargs.get('poll_pk')
        poll = self.get_object_or_404(Poll, pk=poll_id)
        serializer.save(poll=poll)

    def get_queryset(self):
        # Filter the options that belong to the specified poll
        poll_id = self.kwargs.get('poll_pk')
        if poll_id:
            return Option.objects.filter(poll_id=poll_id)
        return super().get_queryset()

    def perform_update(self, serializer):
        instance = serializer.instance
        if 'votes' in serializer.validated_data:
            instance.votes = serializer.validated_data['votes']
        else:
            super().perform_update(serializer)
        instance.save()
    
    @action(detail=True, methods=['post'])
    def vote(self, request, pk=None, poll_pk=None):
        option = self.get_object()
        option.votes += 1
        option.save()
        return Response({'status': 'vote registered', 'votes': option.votes})

class PollViewSet(viewsets.ModelViewSet):
    """
    This viewset provides 'list', 'create', 'retrieve', 'update', 'partial_update', 
    and 'destroy' actions for polls.
    """
    queryset = Poll.objects.all()
    serializer_class = PollSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save()

class OptionViewSet(viewsets.ModelViewSet):
    """
    This viewset provides 'list', 'create', 'retrieve', 'update', 'partial_update', 
    and 'destroy' actions for options.
    """
    queryset = Option.objects.all()
    serializer_class = OptionSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        poll_id = self.kwargs.get('poll_pk')
        poll = self.get_object_or_404(Poll, pk=poll_id)
        serializer.save(poll=poll)

    def get_queryset(self):
        # Filter the options that belong to the specified poll
        poll_id = self.kwargs.get('poll_pk')
        if poll_id:
            return Option.objects.filter(poll_id=poll_id)
        return super().get_queryset()

    def perform_update(self, serializer):
        instance = serializer.instance
        if 'votes' in serializer.validated_data:
            instance.votes = serializer.validated_data['votes']
        else:
            super().perform_update(serializer)
        instance.save()

    @action(detail=True, methods=['post'])
    def vote(self, request, pk=None, poll_pk=None):
        option = self.get_object()
        option.votes += 1
        option.save()
        return Response({'status': 'vote registered', 'votes': option.votes})
