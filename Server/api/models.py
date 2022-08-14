from statistics import mode
from django.db import models
import string
import random

# from django.forms import Input


def generate_unique_code():
    length=6
    while True:
        code=''.join(random.choices(string.ascii_uppercase,k=length))
        if Room.objects.filter(code=code).count()==0:
            break
    return code
# Create your models here.

class charts_view(models.Model):
    Time=models.TimeField(blank=True, null=True)
    Input=models.IntegerField(null=False,default=1)

class Data(models.Model):
    name =  models.CharField(max_length=50,unique=True)
    stack = models.CharField(max_length=50,unique=True)
    framework = models.CharField(max_length=50,unique=True)
    # Votes_to_skip=models.IntegerField(null=False,default=1)
    # created_at= models.DateTimeField(auto_now_add=True)



class Room(models.Model):
    code = models.CharField(max_length=8,default =generate_unique_code,unique=True)
    host = models.CharField(max_length=50,unique=True)
    Guest_can_pause = models.BooleanField(null=False,default=False)
    Votes_to_skip=models.IntegerField(null=False,default=1)
    created_at= models.DateTimeField(auto_now_add=True)


class charts(models.Model):
    code = models.CharField(max_length=8,default =generate_unique_code,unique=True)
    host = models.CharField(max_length=50,unique=True)
    Guest_can_pause = models.BooleanField(null=False,default=False)
    Votes_to_skip=models.IntegerField(null=False,default=1)
    created_at= models.DateTimeField(auto_now_add=True)

    # def is_host_this(host)



class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)