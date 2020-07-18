from django.shortcuts import render
from django.http import JsonResponse, HttpResponse

from statdashboard.models import Workout, Exercise

# Create your views here.
def exercise_history(request):
    if 'exercise_id' not in request.GET:
        return HttpResponse(status=404)
    exercise_id = request.GET.get('exercise_id')
    workouts = Workout.objects.filter(exercise_id=exercise_id)
    dates = [i.date for i in workouts]
    weight = [i.weight for i in workouts]
    json_data = {
        'dates': dates,
        'weights': weight
    }
    return JsonResponse(json_data)

def exercises(request):
    exercises = Exercise.objects.all()
    exercise_names = [None] * len(exercises)
    for i in exercises:
        exercise_names[i.id - 1] = i.name
    json_data = {
        'exercises': exercise_names
    }
    return JsonResponse(json_data)
