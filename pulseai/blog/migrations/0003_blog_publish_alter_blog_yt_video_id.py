# Generated by Django 5.0.6 on 2024-06-20 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_blogcategory_options_blog'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='publish',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='blog',
            name='yt_video_id',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
