from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Master, Review, Gallery, Order
from .serializers import MasterSerializer, ReviewSerializer, GallerySerializer, OrderSerializer

from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import SignUpForm

# Для отправки на фронт (GET)
class MasterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Master.objects.all()
    serializer_class = MasterSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

# Для получения данных (POST)
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    http_method_names = ['post']  # Разрешаем только POST запросы


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/')  # Замените 'home' на имя вашего URL
    else:
        form = SignUpForm()
    return render(request, 'registration/signup.html', {'form': form})