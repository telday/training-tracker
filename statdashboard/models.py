from django.db import models


# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField(null=True)

class Exercise(models.Model):
    name = models.CharField(max_length=50)
    muscle_group = models.CharField(max_length=400)

class Workout(models.Model):
    person = models.ForeignKey(User, on_delete=models.CASCADE)
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    sets = models.IntegerField()
    reps = models.IntegerField()
    weight = models.FloatField()
    date = models.DateField()
