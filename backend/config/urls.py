from django.contrib import admin
from django.urls import include, path, re_path

from core.views import spa

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("core.api_urls")),
    re_path(r"^.*$", spa),
]
