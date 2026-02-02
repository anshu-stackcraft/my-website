from django.urls import path
from .views import register, login, logout, me

urlpatterns = [
    path('register/', register),
    path('login/', login),
    path('logout/', logout),
    path('me/', me),   # 👈 auto login check
]
