# Generated by Django 3.1.2 on 2020-10-18 21:22

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('clubs', '0046_auto_20201017_1149'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='uuid_secret',
            field=models.UUIDField(default=uuid.uuid4),
        ),
    ]
