from django.db import models
from Products.models import Product

class Musical_Instrument(models.Model):
    Musical_InstrumentId = models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')
    Brand = models.CharField(max_length =40)
    Model = models.CharField(max_length =30)
    Product = models.OneToOneField(Product, on_delete=models.CASCADE)
    
    def __str__(self):
        return (self.Name)