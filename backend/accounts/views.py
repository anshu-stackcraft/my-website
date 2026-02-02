from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login as django_login, logout as django_logout
from django.contrib.auth import get_user_model
from django.db.models import Q

from .serializers import RegisterSerializer

User = get_user_model()


# =========================
# REGISTER
# =========================
@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "msg": "User Registered Successfully",
            "status": "success"
        })

    return Response(serializer.errors, status=400)


# =========================
# LOGIN (SESSION BASED)
# =========================
@api_view(['POST'])
def login(request):
    login_input = (
        request.data.get("login")
        or request.data.get("username")
        or request.data.get("email")
    )
    password = request.data.get("password")

    if not login_input or not password:
        return Response({"msg": "Username/email and password required"}, status=400)

    user = authenticate(
        request,
        username=login_input,
        password=password
    )

    # 👇 email login support
    if user is None:
        try:
            user_obj = User.objects.get(email=login_input)
            user = authenticate(
                request,
                username=user_obj.username,
                password=password
            )
        except User.DoesNotExist:
            user = None

    if user is None:
        return Response({"msg": "Invalid credentials"}, status=401)

    # 🔥 THIS LINE CREATES SESSION
    django_login(request, user)

    return Response({
        "msg": "Login successful",
        "user": {
            "id": user.id,
            "username": user.username,
            "email": user.email,
        }
    })


# =========================
# LOGOUT
# =========================
@api_view(['POST'])
def logout(request):
    django_logout(request)
    return Response({"msg": "Logout successful"})


# =========================
# CURRENT USER
# =========================
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
    return Response({
        "user": {
            "id": request.user.id,
            "username": request.user.username,
            "email": request.user.email,
        }
    })
