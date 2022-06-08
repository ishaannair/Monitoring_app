from rest_framework import serializers
from .models import Room
 
class ROomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields=('id','code','host','Guest_can_pause','Votes_to_skip','created_at')

