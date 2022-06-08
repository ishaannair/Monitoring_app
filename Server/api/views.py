from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import ROomSerializer
from .models import Room
# Create your views here.

class RoomView(generics.ListAPIView):
    queryset=Room.objects.all()
    serializer_class= ROomSerializer

# def main(request):
#     return HttpResponse("<h1>The server is up and running <h1>")


# def main2(request):
#     return HttpResponse("<h1>Page transit occured <h1>")