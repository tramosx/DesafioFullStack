from django.db import models
from django.contrib.auth.models import User
from datetime import date

# Create your models here.
class Reuniao(models.Model):
    nome = models.CharField(max_length=150)
    data = models.DateTimeField()
    foto = models.ImageField()
    objetivo = models.TextField()
    funcionarios = models.ManyToManyField(User)

    def __str__(self):
        return '%s %s' % (self.nome, self.data)