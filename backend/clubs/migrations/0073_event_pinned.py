# Generated by Django 3.1.5 on 2021-01-17 23:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("clubs", "0072_zoommeetingvisit"),
    ]

    operations = [
        migrations.AddField(
            model_name="event",
            name="pinned",
            field=models.BooleanField(default=False),
        ),
    ]
