# Generated by Django 3.0.8 on 2020-07-18 20:06

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("clubs", "0025_auto_20200628_1510"),
    ]

    operations = [
        migrations.AddField(
            model_name="membershiprequest",
            name="withdrew",
            field=models.BooleanField(default=False),
        ),
    ]
