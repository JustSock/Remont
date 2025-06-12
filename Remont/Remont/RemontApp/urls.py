from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MasterViewSet, ReviewViewSet, GalleryViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'masters', MasterViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'gallery', GalleryViewSet)
router.register(r'orders', OrderViewSet, basename='orders')

urlpatterns = [
    path('', include(router.urls)),
]