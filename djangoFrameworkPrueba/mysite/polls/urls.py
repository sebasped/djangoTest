from django.urls import path

from . import views

urlpatterns = [
    # path('questions/', views.get_questions, name='questions'), # el name es para los templates
    path('questions/', views.get_questions),
]
