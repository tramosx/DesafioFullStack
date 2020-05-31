from django.shortcuts import render
from .models import Reuniao
from django.http import JsonResponse

# Create your views here.
def lista_reunioes(request, id):
    reuniaoArray = []
    reunioes_funcionario = Reuniao.objects.filter(funcionarios=id)
            
    if reunioes_funcionario:
        for reuniao in reunioes_funcionario:
            reuniaoObj = {}
            reuniaoObj['id_reuniao'] = reuniao.id,
            reuniaoObj['nome_reuniao'] = reuniao.nome,
            reuniaoObj['data'] = reuniao.data.strftime('%d/%m/%Y')
            reuniaoObj['hora'] = reuniao.data.strftime('%H:%M')

            reuniaoArray.append(reuniaoObj)

    return JsonResponse(reuniaoArray, safe=False)