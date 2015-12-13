from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Comment(models.Model):

    author = models.CharField(max_length=255, blank=True, null=True)
    comment = models.TextField()

    class Meta:
        verbose_name = "Comments Tutorial Comment"
        verbose_name_plural = "comments"
