# Generated by Django 3.1 on 2020-08-14 23:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("clubs", "0027_club_fair"),
    ]

    operations = [
        migrations.AlterField(
            model_name="club",
            name="active",
            field=models.BooleanField(default=False),
        ),
    ]
