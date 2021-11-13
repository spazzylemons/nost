# djsr/authentication/urls.py
from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import (
    ObtainTokenPairView,
    CustomUserCreate,
    HelloWorldView,
    LogoutAndBlacklistRefreshTokenForUserView
)


urlpatterns = [
    path('token/obtain/', ObtainTokenPairView.as_view(),
         name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('hello/', HelloWorldView.as_view(), name='hello_world'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(),
         name='blacklist'),
]
