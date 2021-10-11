# Generated by Django 3.2.8 on 2021-10-10 17:02

import datetime

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("clubs", "0090_adminnote"),
    ]

    operations = [
        migrations.CreateModel(
            name="FundedEvent",
            fields=[
                (
                    "event",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        primary_key=True,
                        serialize=False,
                        to="clubs.event",
                    ),
                ),
                ("name", models.CharField(max_length=256)),
                ("date", models.DateField()),
                ("time", models.TimeField()),
                ("location", models.CharField(max_length=256)),
                ("contact_name", models.CharField(blank=True, max_length=256)),
                ("contact_email", models.EmailField(max_length=254)),
                ("contact_phone", models.CharField(max_length=15)),
                ("anticipated_attendance", models.IntegerField()),
                ("advisor_email", models.EmailField(blank=True, max_length=254)),
                ("advisor_phone", models.CharField(blank=True, max_length=15)),
                ("organizations", models.CharField(max_length=256)),
                (
                    "funding_already_received",
                    models.DecimalField(decimal_places=2, default=0, max_digits=17),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("S", "SAVED"),
                            ("B", "SUBMITTED"),
                            ("F", "FUNDED"),
                            ("W", "FOLLOWUP"),
                            ("O", "OVER"),
                        ],
                        max_length=1,
                    ),
                ),
                ("created_at", models.DateTimeField(default=datetime.datetime.now)),
                ("updated_at", models.DateTimeField(default=datetime.datetime.now)),
                (
                    "applied_funders",
                    models.ManyToManyField(
                        related_name="event_applied_funders",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "requester",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name="event_requester",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={"unique_together": {("name", "date", "requester")},},
        ),
        migrations.CreateModel(
            name="Item",
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
                ("name", models.CharField(max_length=256)),
                ("quantity", models.IntegerField()),
                (
                    "price_per_unit",
                    models.DecimalField(decimal_places=2, max_digits=17),
                ),
                (
                    "funding_already_received",
                    models.DecimalField(decimal_places=2, max_digits=17),
                ),
                (
                    "category",
                    models.CharField(
                        choices=[
                            ("H", "Honoraria/Services"),
                            ("E", "Equipment/Supplies"),
                            ("F", "Food/Drinks"),
                            ("S", "Facilities/Security"),
                            ("T", "Travel/Conference"),
                            ("P", "Photocopies/Printing/Publicity"),
                            ("O", "Other"),
                        ],
                        max_length=1,
                    ),
                ),
                ("revenue", models.BooleanField(default=False)),
                (
                    "event",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="clubs.fundedevent",
                    ),
                ),
            ],
        ),
    ]
