from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def renderLoginPage(request):
     return render(request, "app/main.html")