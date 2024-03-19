# Generated by Django 2.2.6 on 2019-10-25 22:18

import django.core.validators
import django.db.models.deletion
import phonenumber_field.modelfields
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("clubs", "0004_merge_20191025_2143")]

    operations = [
        migrations.AlterField(
            model_name="club",
            name="parent_orgs",
            field=models.ManyToManyField(
                blank=True, related_name="children_orgs", to="clubs.Club"
            ),
        ),
        migrations.CreateModel(
            name="Advisor",
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
                ("title", models.CharField(blank=True, max_length=255, null=True)),
                (
                    "email",
                    models.CharField(
                        blank=True,
                        max_length=255,
                        null=True,
                        validators=[django.core.validators.EmailValidator()],
                    ),
                ),
                (
                    "phone",
                    phonenumber_field.modelfields.PhoneNumberField(
                        max_length=128, region=None, unique=True
                    ),
                ),
                (
                    "club",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="clubs.Club"
                    ),
                ),
            ],
        ),
    ]
