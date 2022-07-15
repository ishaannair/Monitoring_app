from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, serializers,status
from .serializers import ROomSerializer,CreateRoomSerializer,ChartViewSerializer
from .models import Room,charts_view
from rest_framework.views import APIView
from rest_framework.response import Response
import pyrebase

# Create your views here.
config={
    "apiKey": "AIzaSyAxOhg2XQiRpktrfDpPGWoqjgQD7alSmq0",
    "authDomain": "fireapp-c3e36.firebaseapp.com",
    "databaseURL": "https://fireapp-c3e36-default-rtdb.firebaseio.com",
    "projectId": "fireapp-c3e36",
    "storageBucket": "fireapp-c3e36.appspot.com",
    "messagingSenderId": "564960363824",
    "appId": "1:564960363824:web:ff9ee05d0330b7f75734f5",
    "measurementId": "G-NBBM679DH2"
}


# firebase=pyrebase.initialize_app(config)
# authe = firebase.auth()
# database=firebase.database()


def index(request):
        #accessing our firebase data and storing it in a variable
        name = database.child('Data').child('Name').get().val()
        stack = database.child('Data').child('Stack').get().val()
        framework = database.child('Data').child('Framework').get().val()
    
        context = {
            'name':name,
            'stack':stack,
            'framework':framework
        }
        return render(request, context)


# room

class RoomView(generics.ListAPIView):
    queryset=Room.objects.all()
    serializer_class= ROomSerializer

class ChartView(generics.ListAPIView):
    queryset=charts_view.objects.all()
    serializer_class= ChartViewSerializer


class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            guest_can_pause = serializer.data.get('guest_can_pause')
            votes_to_skip = serializer.data.get('votes_to_skip')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip
                room.save(update_fields=['guest_can_pause', 'votes_to_skip'])
                return Response(ROomSerializer(room).data, status=status.HTTP_200_OK)
            else:
                room = Room(host=host, guest_can_pause=guest_can_pause,
                            votes_to_skip=votes_to_skip)
                room.save()
                return Response(ROomSerializer(room).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
def main(request):
    return HttpResponse("<h1>The server is up and running <h1>")


# def main2(request):
#     return HttpResponse("<h1>Page transit occured <h1>")