# Generated by Django 4.2.4 on 2023-09-05 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0002_alter_product_discount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='ProductType',
            field=models.CharField(choices=[('Book', 'Libro'), ('MusicalInstrument', 'Instrumento Musical'), ('TableGames', 'Juego de mesa'), ('Technology', 'Tecnologia')], default=False, max_length=20),
        ),
    ]
