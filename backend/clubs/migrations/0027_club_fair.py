# Generated by Django 3.0.8 on 2020-08-11 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("clubs", "0026_membershiprequest_withdrew"),
    ]

    operations = [
        migrations.AddField(
            model_name="club",
            name="fair",
            field=models.BooleanField(default=False),
        ),
    ]
