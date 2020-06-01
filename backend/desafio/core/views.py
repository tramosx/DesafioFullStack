from django.shortcuts import render
from .models import Reuniao
from django.http import JsonResponse
import json

# Create your views here.
def lista_reunioes(request, id):
    reuniaoArray = []
    reunioes_funcionario = Reuniao.objects.filter(funcionarios=id)

    url = "http://127.0.0.1:8000/media/"
            
    if reunioes_funcionario:
        for reuniao in reunioes_funcionario:
            reuniaoObj = {}
            reuniaoObj['id_reuniao'] = reuniao.id,
            reuniaoObj['foto'] = url + json.dumps(str(reuniao.foto)).strip('\"') 
            reuniaoObj['nome_reuniao'] = reuniao.nome,
            reuniaoObj['data'] = reuniao.data.strftime('%d/%m/%Y')
            reuniaoObj['hora'] = reuniao.data.strftime('%H:%M')
            
            reuniaoArray.append(reuniaoObj)




    print("reuniao")
    print(reuniao)
    print(request.build_absolute_uri)
    return JsonResponse(reuniaoArray, safe=False)