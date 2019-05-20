from django.urls import path

from .routes.questions import get_all as get_questions, get_item as get_question, create_item as create_question

urlpatterns = [
    # path('questions/', views.get_questions, name='questions'), # el name es para los templates
    path('questions/', get_questions),
    path('question/<int:question_id>/', get_question),
    path('question/create/', create_question),
]
