# Generated by Django 3.0.7 on 2020-07-17 03:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('statdashboard', '0006_workout_exercise'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workout',
            name='exercise_name',
        ),
    ]
