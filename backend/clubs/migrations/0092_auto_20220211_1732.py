# Generated by Django 3.2.8 on 2022-02-11 22:32

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("clubs", "0091_ticket"),
    ]

    operations = [
        migrations.AddField(
            model_name="ticket",
            name="held",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="ticket",
            name="holding_expiration",
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.CreateModel(
            name="Cart",
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
                (
                    "owner",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="cart",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="ticket",
            name="carts",
            field=models.ManyToManyField(
                blank=True, related_name="tickets", to="clubs.Cart"
            ),
        ),
    ]
