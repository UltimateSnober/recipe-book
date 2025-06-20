from rest_framework import serializers
from .models import User


class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name',
                  'email', 'password', 'phone_number']
        extra_kwargs = {'password': {'write_only': True}}


class UserSigninSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)


class UserProfileSerializer(serializers.ModelSerializer):
    """Serializer for user profile data"""
    date_joined = serializers.DateTimeField(read_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name',
                  'email', 'phone_number', 'date_joined']
        read_only_fields = ['date_joined']


class UserProfileUpdateSerializer(serializers.ModelSerializer):
    """Serializer for updating user profile with password change support"""
    old_password = serializers.CharField(write_only=True, required=False)
    password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email',
                  'phone_number', 'old_password', 'password']

    def validate(self, data):
        # If password is provided, old_password must be provided too
        if 'password' in data and data['password'] and not data.get('old_password'):
            raise serializers.ValidationError(
                {"old_password": "Current password is required to set a new password"}
            )
        return data

    def validate_email(self, value):
        # Check email uniqueness but exclude current user
        user = self.context['request'].user
        if value != user.email and User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value
