
from django.shortcuts import render

from ..models import Question as Model
from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import csrf_exempt

import json

def get_all(request):
    listaSQL = Model.objects.all().values()#.order_by('-pub_date')
    lista = list(listaSQL) # convierto el Query SQL a una lista para poder pasarlo a json
    return JsonResponse(lista, safe=False)

def get_item(request,question_id):
    obj = Model.objects.get(pk=question_id)
    dict_obj = model_to_dict( obj )
    # return HttpResponse("Hello, world. You're at the polls index.")
    return JsonResponse(dict_obj, safe=False)

@csrf_exempt
def create_item(request):
    data = json.loads(request.body.decode("utf-8"))
    item = data["item"]
    m = Model(**item)
    m.save()
    return HttpResponse("Ok!")




