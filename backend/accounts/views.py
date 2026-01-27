from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Register
from .serializers import RegisterSerializer
from django.contrib.auth import authenticate
from django.db.models import Q
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

User = get_user_model()

@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "msg": "User Registered Successfully",
            "status": "success"
        })

    return Response(serializer.errors)

@api_view(['POST'])
def login(request):
    login_input = (
        request.data.get("login") or
        request.data.get("username") or
        request.data.get("email")
    )
    password = request.data.get("password")

    if not login_input or not password:
        return Response({
            "msg": "Login and password required",
            "status": "failed"
        }, status=400)

    try:
        user = User.objects.get(
            Q(username=login_input) | Q(email=login_input)
        )
    except User.DoesNotExist:
        return Response({
            "msg": "Invalid credentials",
            "status": "failed"
        }, status=401)

    if not user.check_password(password):
        return Response({
            "msg": "Invalid credentials",
            "status": "failed"
        }, status=401)

    # Generate JWT tokens
    refresh = RefreshToken.for_user(user)

    return Response({
        "msg": "Login successful",
        "status": "success",
        "access": str(refresh.access_token),
        "refresh": str(refresh),
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email
        }
    })



@api_view(['POST'])
def logout(request):
    return Response({
        "msg": "Logout Successful",
        "status": "success"
    })



