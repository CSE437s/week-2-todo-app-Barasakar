from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def renderLoginPage(request):
     return render(request, "app/main.html")

def add_task(request):
    if request == "POST":
        task = request.POST["task"]
        due_date = request.POST["due_date"]
        print(task)
        print(due_date)
    return HttpResponse("Task added successfully")