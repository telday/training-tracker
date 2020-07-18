from django.contrib import admin
from django.urls import path, include

from api import views

urlpatterns = [
	path('exercise_history', views.exercise_history, name='exercise-history'),
	path('exercises', views.exercises, name='exercises'),
]
