from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import HttpResponse
from comments.models import Comment
from django_react import json_encoder

import json
# Create your views here.


def index(request):
    return render(request, "comments2.html")


def static(request):
    rtn_list = [
        {"id": 1, "author": "Pete Hunt", "text": "This is two comment"},
        {"id": 2, "author": "Jordan Walke", "text": "This is *another* comment"}
    ]
    return HttpResponse(json.dumps(rtn_list), content_type="application/json")


@csrf_exempt
def tutorial_api(request):
    if request.method == "POST":
        print(request.body)
        _body = json.loads(request.body)
        try:
            new_comment = Comment(author=_body["author"], comment=_body["comment"])
            new_comment.save()
        except Exception as e:
            print(e)
    rtn_list = json_encoder.serialize_to_json(Comment.objects.all().values())
    return HttpResponse(rtn_list, content_type="application/json")
