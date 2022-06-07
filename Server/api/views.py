from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def main(request):
    return HttpResponse("<h1>The server is up and running <h1>")


def main2(request):
    return HttpResponse("<h1>Page transit occured <h1>")