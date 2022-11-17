from django.contrib import admin
from api.models import *

# Register your models here.
admin.site.register(Producto)
admin.site.register(Receta)
admin.site.register(ProductoParaReceta)
admin.site.register(Carousel)