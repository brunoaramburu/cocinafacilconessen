from django.db import models
from tinymce import models as tinymce_models

# Create your models here.

class Producto(models.Model):
    nombre = models.CharField(max_length=50, primary_key=True)
    categoria = models.CharField(max_length=30)
    descripcion = tinymce_models.HTMLField(null=True)
    atributos = tinymce_models.HTMLField(null=True)
    imagen = models.ImageField(upload_to="Productos", null=True, blank=True)
    productos = 'Productos'
    combos = 'Combos'
    bazarpremium = 'Bazar premium'
    complementos = 'Complementos'
    categoria_opciones = [
        (productos, 'Productos'),
        (combos, 'Combos'),
        (bazarpremium, 'Bazar premium'),
        (complementos, 'Complementos'),
    ]
    categoria = models.CharField(max_length=20, choices=categoria_opciones, default= productos)

class ProductoParaReceta(models.Model):
    producto = models.OneToOneField(Producto, on_delete=models.CASCADE, primary_key=True)

class Receta(models.Model):
    nombre = models.CharField(max_length=50, primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    comensales = models.CharField(max_length=3)
    duracion = models.CharField(max_length=15)
    ingredientes = tinymce_models.HTMLField()
    preparacion = tinymce_models.HTMLField()
    imagen = models.ImageField(upload_to="Recetas", null=True, blank=True)
    productoutilizado1 = models.ForeignKey(ProductoParaReceta, on_delete=models.CASCADE, null=True, blank=True, related_name='productoutilizado1')
    productoutilizado2 = models.ForeignKey(ProductoParaReceta, on_delete=models.CASCADE, null=True, blank=True, related_name='productoutilizado2')
    productoutilizado3 = models.ForeignKey(ProductoParaReceta, on_delete=models.CASCADE, null=True, blank=True, related_name='productoutilizado3')

class Suscripciones(models.Model):
    nombre = models.CharField(max_length=50, primary_key=True)
    numerodetelefono = models.CharField(max_length=30)

    class Meta:
        verbose_name = 'Formulario de suscripcion'
        verbose_name_plural = 'Formularios de suscripcion '

class Sumate(models.Model):
    nombre = models.CharField(max_length=50, primary_key=True)
    apellido = models.CharField(max_length=50)
    numerodetelefono = models.CharField(max_length=30)

    class Meta:
        verbose_name = 'Formulario "Sumate a nuestro equipo"'
        verbose_name_plural = 'Formularios "Sumate a nuestro equipo"'

class Carousel(models.Model):
    imagen = models.ImageField(upload_to="Carousel", blank=True)

    class Meta:
        verbose_name = 'Carousel'
        verbose_name_plural = 'Carousel'
    