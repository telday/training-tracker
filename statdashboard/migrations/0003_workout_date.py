# Generated by Django 3.0.7 on 2020-06-28 18:13

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('statdashboard', '0002_user_age'),
    ]

    operations = [
        migrations.AddField(
            model_name='workout',
            name='date',
            field=models.DateField(default=datetime.datetime(2020, 6, 28, 18, 13, 51, 595259)),
            preserve_default=False,
        ),
    ]
