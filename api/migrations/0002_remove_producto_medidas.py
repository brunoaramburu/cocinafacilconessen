# Generated by Django 4.0.5 on 2022-07-26 22:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='producto',
            name='medidas',
        ),
    ]
