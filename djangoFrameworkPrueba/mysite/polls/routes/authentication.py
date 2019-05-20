import json
from django.contrib.auth import authenticate as auth
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def authenticate(request):
    data = json.loads(request.body.decode("utf-8"))
    username = data["username"]
    password = data["password"]
    print("Username", username)
    print("Password", password)
    user = auth(username=username, password=password) # Genera problemas... Nunca obtiene el usuario.
    print("USer:", user)
    if user is None:
        response =  {
            "authenticated": False,
            "token": None,
            "username": None,
        }
        return JsonResponse(response, safe=False)
    else:
        response = {
            "authenticated": True,
            "token": user.token,
            "username": user.username,
        }
        return JsonResponse(response, safe=False)







