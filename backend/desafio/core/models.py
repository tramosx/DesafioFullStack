from django.db import models
from django.contrib.auth.models import User
from datetime import date
from django.core.files.storage import FileSystemStorage

fs = FileSystemStorage(location='/home/thiagoneri/desafio_tecnico/DesafioFullStack/backend/desafio/core/static')

# Create your models here.
class Reuniao(models.Model):
    nome = models.CharField(max_length=150)
    data = models.DateTimeField()
    foto = models.ImageField(upload_to='images/')
    objetivo = models.TextField()
    funcionarios = models.ManyToManyField(User)

    def __str__(self):
        return '%s %s %s' % (self.nome, self.data, self.foto) 