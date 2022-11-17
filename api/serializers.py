from rest_framework import serializers

from api.models import Producto, ProductoParaReceta, Receta, Sumate, Suscripciones, Carousel

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = "__all__"

class RecetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Receta
        fields = "__all__"

class ProductoParaRecetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductoParaReceta
        fields = "__all__"

class SuscripcionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suscripciones
        fields = "__all__"

class SumateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sumate
        fields = "__all__"

class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = "__all__"



