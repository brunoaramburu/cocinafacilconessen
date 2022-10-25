from django.urls import path, include
from rest_framework import routers

from api.views import BazarPremiumViewSet, CombosViewSet, ProductosViewSet, CombosViewSet, ProductoParaRecetaViewSet, ProductoViewSet, RecetaViewSet, RecetasRecientesViewSet, SumateViewSet, SuscripcionesViewSet

router = routers.DefaultRouter()
router.register(r'producto', ProductoViewSet)
router.register(r'receta', RecetaViewSet)
router.register(r'recetas_recientes', RecetasRecientesViewSet)
router.register(r'productos', ProductosViewSet)
router.register(r'lineamarsala', CombosViewSet)
router.register(r'bazarpremium', BazarPremiumViewSet)
router.register(r'productospararecetas', ProductoParaRecetaViewSet)
router.register(r'suscripciones', SuscripcionesViewSet)
router.register(r'sumate', SumateViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('tinymce/', include('tinymce.urls')),
]
