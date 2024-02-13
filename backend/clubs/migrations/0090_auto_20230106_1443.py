# Generated by Django 3.2.16 on 2023-01-06 19:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("clubs", "0089_auto_20230103_1239"),
    ]

    operations = [
        migrations.CreateModel(
            name="ApplicationCycle",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("start_date", models.DateTimeField(null=True)),
                ("end_date", models.DateTimeField(null=True)),
            ],
        ),
        migrations.AddField(
            model_name="clubapplication",
            name="application_cycle",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="clubs.applicationcycle",
            ),
        ),
    ]
