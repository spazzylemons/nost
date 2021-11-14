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
        return datetime.datetime.fromisoformat(request.GET.get(param, '')[:-1])
    except ValueError:
        return None


class CreateUserPostView(APIView):
    nltk.download('vader_lexicon')

    sid = SentimentIntensityAnalyzer()

    def post(self, request):
        if request.content_type == 'text/plain':
            text = request.body.decode('utf-8')
        else:
            # assume audio stream
            def generator():
                yield request.body
            url = requests.post('https://api.assemblyai.com/v2/upload',
                                headers={'Authorization': os.environ['ASSEMBLYAI_TOKEN'],
                                         'Content-Type': request.content_type},
                                data=generator()).json()['upload_url']
            headers = {
                'Authorization': os.environ['ASSEMBLYAI_TOKEN'],
                'Content-Type': 'application/json',
            }
            res = requests.post(
                'https://api.assemblyai.com/v2/transcript',
                headers=headers,
                json={'audio_url': url}
            ).json()
            while res['status'] != 'completed':
                time.sleep(0.5)
                res = requests.get(
                    'https://api.assemblyai.com/v2/transcript/' + res['id'],
                    headers=headers,
                ).json()
            text = res['text']
        scores = self.sid.polarity_scores(text)
        serializer = UserPostSerializer(data={
            'text': text,
            'time': datetime.datetime.now(),
            'user': request.user.id,
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


class TestView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        print(request.data)
        return Response(request.data)
