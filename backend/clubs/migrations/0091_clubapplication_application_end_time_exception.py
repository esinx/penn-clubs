# Generated by Django 3.2.18 on 2023-11-17 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("clubs", "0090_auto_20230106_1443"),
    ]

    operations = [
        migrations.AddField(
            model_name="clubapplication",
            name="application_end_time_exception",
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
