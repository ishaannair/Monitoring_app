from rest_framework import serializers
from .models import Room,charts_view
 
class ROomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields=('id','code','host','Guest_can_pause','Votes_to_skip','created_at')

class CreateRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('guest_can_pause', 'votes_to_skip')


class ChartViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = charts_view
        fields=('Time','Input')
