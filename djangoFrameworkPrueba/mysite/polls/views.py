from django.shortcuts import render

# Create your views here.

from .models import Question
from django.http import HttpResponse
from django.http import JsonResponse

# def index(request):
#     # latest_question_list = Question.objects.order_by('-pub_date')[:5]
#     latest_question_list = Question.objects.order_by('-pub_date')
#     template = loader.get_template('polls/index.html')
#     context = {
#         'latest_question_list': latest_question_list,
#     }
#     return HttpResponse(template.render(context, request))

def get_questions(request):
    # latest_question_list = Question.objects.order_by('-pub_date')[:5]
    listaSQL = Question.objects.all().values().order_by('-pub_date')
    lista = list(listaSQL) # convierto el Query SQL a una lista para poder pasarlo a json
    # output = ', '.join([q.question_text for q in latest_question_list])
    # return HttpResponse(output)
    # return HttpResponse("Hello, world. You're at the polls index.")
    return JsonResponse(lista, safe=False)
