# Generated by Django 4.2.4 on 2023-09-26 17:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Musical_Instruments', '0003_rename_producttype_musical_instrument_musicalinstrumenttype'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='musical_instrument',
            name='MusicalInstrumentType',
        ),
    ]
