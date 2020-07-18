# Generated by Django 3.0.7 on 2020-07-17 03:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('statdashboard', '0005_exercise'),
    ]

    operations = [
        migrations.AddField(
            model_name='workout',
            name='exercise',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='statdashboard.Exercise'),
            preserve_default=False,
        ),
    ]
