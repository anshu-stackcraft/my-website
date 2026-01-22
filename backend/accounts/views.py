from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegisterSerializer
from django.contrib.auth import authenticate



@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"msg": "user Registered"})
    return Response(serializer.errors)


@api_view(['POST'])
def login(request):
    user = authenticate(
        username = request.data["username"],
        password = request.data["password"]
    )


    if user:
        return Response({"msg": "Login Success"})
    return Response({"msg": "Invalid Credentials"})
       

