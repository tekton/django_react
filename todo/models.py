from __future__ import unicode_literals

from django.db import models


# Create your models here.
class Todo(models.Model):

    class Meta:
        verbose_name = "flux TODO tutorial items"
        verbose_name_plural = "todos"
