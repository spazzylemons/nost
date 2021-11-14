# djsr/authentication/urls.py
from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import (
    ObtainTokenPairView,
    CustomUserCreate,
    GetUserPostsView,
    CreateUserPostView,
    TestView
)


urlpatterns = [
    path('token/obtain/', ObtainTokenPairView.as_view(),
         name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('posts/filter/', GetUserPostsView.as_view(), name='filter_posts'),
    path('posts/create/', CreateUserPostView.as_view(), name='create_post'),
    path('test/', TestView.as_view(), name='test'),
]
