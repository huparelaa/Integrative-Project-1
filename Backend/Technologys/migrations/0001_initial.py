# Generated by Django 4.2.4 on 2023-09-04 15:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Products', '0002_alter_product_discount'),
    ]

    operations = [
        migrations.CreateModel(
            name='Technology',
            fields=[
                ('TechnologyId', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=60)),
                ('Characteristics', models.CharField(max_length=300)),
                ('Brand', models.CharField(max_length=50)),
                ('Model', models.CharField(max_length=50)),
                ('Product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Products.product')),
            ],
        ),
    ]
