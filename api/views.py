from rest_framework import viewsets
from api.models import Producto, ProductoParaReceta, Receta, Sumate, Suscripciones, Carousel
from api.serializers import ProductoParaRecetaSerializer, ProductoSerializer, RecetaSerializer, SumateSerializer, SuscripcionesSerializer, CarouselSerializer

# Create your views here.

class ProductoViewSet(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all()

class RecetaViewSet(viewsets.ModelViewSet):
    serializer_class = RecetaSerializer
    queryset = Receta.objects.all()

class SuscripcionesViewSet(viewsets.ModelViewSet):
    serializer_class = SuscripcionesSerializer
    queryset = Suscripciones.objects.all()

class SumateViewSet(viewsets.ModelViewSet):
    serializer_class = SumateSerializer
    queryset = Sumate.objects.all()

class RecetasRecientesViewSet(viewsets.ModelViewSet):
    serializer_class = RecetaSerializer
    queryset = Receta.objects.all().order_by('-created')[:4]

class ProductosViewSet(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all().filter(categoria='Productos')

class CombosViewSet(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all().filter(categoria='Combos')    

class BazarPremiumViewSet(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all().filter(categoria='Bazar premium')

class ComplementosViewSet(viewsets.ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = Producto.objects.all().filter(categoria='Complementos')

class ProductoParaRecetaViewSet(viewsets.ModelViewSet):
    serializer_class = ProductoParaRecetaSerializer
    queryset = ProductoParaReceta.objects.all().order_by('producto')

class CarouselViewSet(viewsets.ModelViewSet):
    serializer_class = CarouselSerializer
    queryset = Carousel.objects.all()


         

    