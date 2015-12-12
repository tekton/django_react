from django.conf.urls import url

import views


urlpatterns = [
    url(r"api", views.tutorial_api),
    url(r"static", views.static),  # adds the / to the begining since there's no ^
    url(r"^$", views.index)
]
