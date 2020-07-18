import re
import datetime
import functools
import os
from dataclasses import dataclass

from django.core.management.base import BaseCommand
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "trainingsite.settings")

@dataclass
class WorkoutData:
    sets: int
    reps: int
    weight: float
    exercise_name: str
    date: datetime.date
    person_id: int = 1

class Command(BaseCommand):
    def handle(self, **options):
        with open("data", 'r') as datafile:
            data = datafile.read()

        lines = data.split("\n")
        date_regex = re.compile("(?P<month>\d{1,2})\/(?P<day>\d{1,2})(\/\d{1,4})?")
        exercise_regex = re.compile(
            "(?P<sets>\d+)x(?P<reps>\d+)(?P<exercise>[\w\s]+)at( |)(?P<weight>\d+(\.\d+)?)"
        )
        new_date = functools.partial(datetime.date, 2020)
        current_date = None
        data = dict()
        rows = list()
        for i in lines:
            if date_regex.match(i):
                current_date = i
            elif (k := exercise_regex.match(i)):
                if current_date in data:
                    data[current_date].append(k)
                else:
                    data[current_date] = [k]
        from statdashboard.models import User, Workout
        for i in data:
            date_info = date_regex.match(i)
            for j in data[i]:
                new_row = Workout(
                    sets = int(j.group('sets')),
                    reps = int(j.group('reps')),
                    weight = float(j.group('weight')),
                    exercise_name = j.group('exercise').lstrip(' ').rstrip(' '),
                    person_id=1,
                    date = new_date(int(date_info.group('month')), int(date_info.group('day'))),
                )
                new_row.save()
