from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import authentication
from .serializers import LoginSeralizer

@api_view(['GET'])
def LoginView(request):
    if request.method == 'GET':
        students = authentication.objects.all()
        serilizer = LoginSeralizer(students, meny=True)
        return Response(serilizer.data, status=status.HTTP_200_OK)
