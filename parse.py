import re
import datetime
import functools
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "trainingsite.settings")

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
for i in lines:
    if date_regex.match(i):
        current_date = i
    elif exercise_regex.match(i):
        if current_date in data:
            data[current_date].append(i)
        else:
            data[current_date] = [i]
print(data)

from statdashboard.models import *
# User, Workout
