from django.db import models
from django.core.validators import EmailValidator

class Master(models.Model):
    name = models.CharField(max_length=100, verbose_name="Имя")
    image = models.ImageField(
        upload_to='products/',
        blank=True,          
        null=True,
        verbose_name="Фото"
    )
    class Meta:
        verbose_name = "Мастер"
        verbose_name_plural = "Мастера"
        
    def __str__(self):
        return self.name

class Review(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название")
    image = models.ImageField(
        upload_to='products/',
        blank=True,          
        null=True,
        verbose_name="Фото"
    )
    text = models.CharField(max_length=100, verbose_name="Текст")
    
    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"
        
    def __str__(self):
        return self.name

class Gallery(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название")
    image = models.ImageField(
        upload_to='products/',
        blank=True,          
        null=True,
        verbose_name="Фото"
    )

    class Meta:
        verbose_name = "Услуга"
        verbose_name_plural = "Услуги"
        
    def __str__(self):
        return self.name

class Order(models.Model):
    type = models.CharField(max_length=100, verbose_name="Тип услуги")
    name = models.CharField(max_length=100, verbose_name="Имя")
    phone = models.CharField(max_length=20, blank=True, null=True, verbose_name="Телефон")
    email = models.EmailField(max_length=255, blank=True, null=True, validators=[EmailValidator()], verbose_name="Email")
    time = models.TimeField(blank=True, null=True, verbose_name="Время")
    
    class Meta:
        verbose_name = "Заявка"
        verbose_name_plural = "Заявки"
        
    def __str__(self):
        return self.name