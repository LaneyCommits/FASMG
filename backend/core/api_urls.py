"""Reserved for future JSON APIs (e.g. member artwork)."""

from django.http import JsonResponse
from django.urls import re_path


def api_placeholder(request):
    return JsonResponse(
        {"detail": "API routes are reserved for future use."},
        status=501,
    )


urlpatterns = [
    re_path(r"^.*$", api_placeholder),
]
