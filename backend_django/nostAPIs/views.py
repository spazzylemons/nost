import datetime
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import nltk
import requests
import os
import time
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

class CreateUserPostView(APIView):
    nltk.download('vader_lexicon')

    sid = SentimentIntensityAnalyzer()

    def post(self, request):
        if not 'user_id' in request.data:
            return Response('missing user id', status=status.HTTP_400_BAD_REQUEST)
        user_id = request.data['user_id']
        if 'audio' in request.data:
            audio = request.data['audio']
            headers={
                'Authorization': os.environ['ASSEMBLYAI_TOKEN'],
                'Content-Type': 'application/json',
            }
            res = requests.post(
                'https://api.assemblyai.com/v2/transcript',
                headers=headers,
                json={
                    'audio_url': audio
                }
            ).json()
            while res['status'] != 'completed':
                time.sleep(0.5)
                res = requests.get(
                    'https://api.assemblyai.com/v2/transcript/' + res['id'],
                    headers=headers,
                ).json()
            text = res['text']
        elif 'text' in request.data:
            text = request.data['text']
        else:
            return Response('missing text', status=status.HTTP_400_BAD_REQUEST)
        if not isinstance(text, str):
            return Response('text must be a string', status=status.HTTP_400_BAD_REQUEST)
        scores = self.sid.polarity_scores(text)
        serializer = UserPostSerializer(data={
            'text': text,
            'time': datetime.datetime.now(),
            'user': user_id,
            'neg': scores['neg'],
            'neu': scores['neu'],
            'pos': scores['pos'],
            'compound': scores['compound'],
        })
        if serializer.is_valid():
            user_post = serializer.save()
            if user_post:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
