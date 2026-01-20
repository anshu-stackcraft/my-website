from rest_framework  import serializers
from .models import authentication


class LoginSeralizer(serializers.Serializer):
    class Meta:
        fields = '__all__'