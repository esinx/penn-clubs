# Generated by Django 3.2.6 on 2021-09-10 18:42

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("clubs", "0084_auto_20210902_0055"),
    ]

    operations = [
        migrations.AlterField(
            model_name="clubapplication",
            name="external_url",
            field=models.URLField(blank=True),
        ),
    ]
