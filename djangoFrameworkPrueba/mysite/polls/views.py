from django.shortcuts import render

from .models import Question
from django.http import HttpResponse
from django.http import JsonResponse
from django.core import serializers
from django.forms.models import model_to_dict


def get_questions(request):
    listaSQL = Question.objects.all().values()#.order_by('-pub_date')
    lista = list(listaSQL) # convierto el Query SQL a una lista para poder pasarlo a json
    return JsonResponse(lista, safe=False)

def get_question_by_id(request,question_id):
    obj = Question.objects.get(pk=question_id)
    dict_obj = model_to_dict( obj )
    # return HttpResponse("Hello, world. You're at the polls index.")
    return JsonResponse(dict_obj, safe=False)



