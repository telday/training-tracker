
from django.contrib import admin
from django.urls import path, include

from statdashboard import views

urlpatterns = [
	path('', views.index, name='dashboard_index'),
]
