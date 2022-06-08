
from django.urls import path
from .views import RoomView
from django.views.generic import TemplateView
urlpatterns = [
    path('room',RoomView.as_view()),
    path("",TemplateView.as_view(template_name='index.html'))

]
