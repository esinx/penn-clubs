# Generated by Django 3.1.6 on 2021-02-20 01:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('clubs', '0076_auto_20210214_1305'),
    ]

    operations = [
        migrations.AddField(
            model_name='club',
            name='archived',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='club',
            name='archived_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='archived_clubs', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='club',
            name='archived_on',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='historicalclub',
            name='archived',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='historicalclub',
            name='archived_by',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='+', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='historicalclub',
            name='archived_on',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
