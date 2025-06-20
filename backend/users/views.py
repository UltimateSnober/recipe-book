from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import logout
from .models import User
from .serializers import (
    UserSignupSerializer,
    UserSigninSerializer,
    UserProfileSerializer,
    UserProfileUpdateSerializer
)
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics


class SignupView(APIView):
    """
    API endpoint for user registration.

    Handles user signup process, validates and stores new user data.
    """

    def post(self, request):
        """
        Process user registration request.

        Validates user input data, encrypts the password, and creates a new user account.

        Args:
            request: HTTP request containing user registration data

        Returns:
            Response: User data on success or error details on failure
        """
        serializer = UserSignupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(password=make_password(
                serializer.validated_data['password']))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SigninView(APIView):
    """
    API endpoint for user authentication.

    Handles user login process, validates credentials and issues JWT tokens.
    """

    def post(self, request):
        """
        Process user login request.

        Validates credentials, authenticates the user, and returns access and refresh tokens.

        Args:
            request: HTTP request containing user login credentials

        Returns:
            Response: JWT tokens on successful authentication or error details on failure
        """
        serializer = UserSigninSerializer(data=request.data)
        if serializer.is_valid():
            try:
                user = User.objects.get(
                    email=serializer.validated_data['email'])
                if check_password(serializer.validated_data['password'], user.password):
                    refresh = RefreshToken.for_user(user)
                    return Response({
                        'access': str(refresh.access_token),
                        'refresh': str(refresh),
                        'message': 'Sign in successful'
                    }, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
            except User.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SignoutView(APIView):
    """
    API endpoint for user logout.

    Handles user signout by invalidating the refresh token.
    Requires authentication.
    """
    permission_classes = [IsAuthenticated]

    def post(self, request):
        """
        Process user logout request.

        Blacklists the provided refresh token to prevent its future use.

        Args:
            request: HTTP request containing the refresh token to invalidate

        Returns:
            Response: Success message or error details
        """
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({'message': 'Signed out successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)


class ProfileView(APIView):
    """
    API endpoint for user profile management.

    Provides functionality to retrieve and update user profile information.
    Requires authentication.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        """
        Retrieve the authenticated user's profile information.

        Args:
            request: HTTP request from an authenticated user

        Returns:
            Response: User profile data
        """
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        """
        Update the authenticated user's profile information.

        Handles updates to basic profile fields, email address, and password.
        Includes validation for email uniqueness and password changes.

        Args:
            request: HTTP request containing fields to update

        Returns:
            Response: Updated user data on success or error details on failure
        """
        user = request.user
        serializer = UserProfileUpdateSerializer(
            user,
            data=request.data,
            context={'request': request},
            partial=True
        )

        if serializer.is_valid():
            if 'password' in request.data and request.data['password']:
                if not check_password(request.data['old_password'], user.password):
                    return Response(
                        {"error": "Current password is incorrect."},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                user.password = make_password(request.data['password'])

            serializer.save()

            profile_serializer = UserProfileSerializer(user)
            return Response({
                **profile_serializer.data,
                "message": "Profile updated successfully"
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
