
from django.urls import path
from .views import RoomView,CreateRoomView,main,ChartView,index,sendPHBalancer,sendEnergyPower
# import views
from django.views.generic import TemplateView
urlpatterns = [
    path('room',RoomView.as_view()),
    path('view-chart',ChartView.as_view()),
    # path("",TemplateView.as_view(template_name='index.html'))
    path('',main),
    path('create-room', CreateRoomView.as_view()),
    path("index",index),
    path("sendPHBalancer",sendPHBalancer),
    path("sendEnergyPower",sendEnergyPower),
]
