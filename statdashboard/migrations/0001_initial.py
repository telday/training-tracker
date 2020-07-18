# Generated by Django 3.0.7 on 2020-06-28 17:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Workout',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sets', models.IntegerField()),
                ('reps', models.IntegerField()),
                ('weight', models.IntegerField()),
                ('exercise_name', models.CharField(max_length=200)),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='statdashboard.User')),
            ],
        ),
    ]