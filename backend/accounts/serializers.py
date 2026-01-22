from rest_framework import serializers
from django.contrib.auth.models import User


class  RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwarge = {'password': {'write_only': True}}

    def create(self, validate_data):
        user = User.objects.create_user(**validate_data)
        return user