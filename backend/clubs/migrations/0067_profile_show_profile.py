# Generated by Django 3.1.4 on 2020-12-31 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("clubs", "0066_auto_20201221_0859"),
    ]

    operations = [
        migrations.AddField(
            model_name="profile", name="show_profile", field=models.BooleanField(default=True),
        ),
    ]
