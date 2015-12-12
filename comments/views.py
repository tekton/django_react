from django.shortcuts import render
from django.http import HttpResponse
import json
# Create your views here.


def index(request):
    return render(request, "comments.html")


def static(request):
    rtn_list = [
        {"id": 1, "author": "Pete Hunt", "text": "This is two comment"},
        {"id": 2, "author": "Jordan Walke", "text": "This is *another* comment"}
    ]
    return HttpResponse(json.dumps(rtn_list), content_type="application/json")
