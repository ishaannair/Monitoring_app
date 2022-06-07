
from django.urls import path
from .views import main, main2

urlpatterns = [
    path('home',main2),
    path('',main)
]
