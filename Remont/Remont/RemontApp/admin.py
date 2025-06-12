from django.contrib import admin

from .models import Master, Review, Gallery, Order

# Регистрируем модели
admin.site.register(Master)
admin.site.register(Review)
admin.site.register(Gallery)
admin.site.register(Order)