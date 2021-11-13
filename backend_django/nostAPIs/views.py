import datetime
from django.shortcuts import render
from .models import UserPost
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import (
    MyTokenObtainPairSerializer,
    CustomUserSerializer,
    UserPostSerializer,
)
from rest_framework import serializers, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
# Create your views here.


class ObtainTokenPairView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenObtainPairSerializer


class CustomUserCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HelloWorldView(APIView):

    def get(self, request):
        return Response(data={"hello": "world"}, status=status.HTTP_200_OK)


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class GetUserPostsView(APIView):
    def get(self, request):
        start_time = date_from_iso(request, 'start_time')
        end_time = date_from_iso(request, 'end_time')
        if start_time is not None and end_time is not None:
            qs = UserPost.objects.filter(time__range=(start_time, end_time))
            serializer = UserPostSerializer(qs, many=True)
            return Response(serializer.data)
        return Response('invalid timestamp', status=status.HTTP_400_BAD_REQUEST)


def date_from_iso(request, param):
    try:
        return datetime.datetime.fromisoformat(request.GET.get(param, ''))
    except ValueError:
        return None
