from pathlib import Path

from django.conf import settings
from django.http import FileResponse, HttpResponse


def spa(request):
    """Serve the Vite-built SPA index.html for client-side routes."""
    candidates = [
        settings.FRONTEND_BUILD_DIR / "index.html",
        settings.STATIC_ROOT / "index.html",
    ]
    for path in candidates:
        if path.is_file():
            return FileResponse(path.open("rb"), content_type="text/html; charset=utf-8")
    return HttpResponse(
        "Frontend build not found. Run: cd frontend && npm install && npm run build && "
        "cd ../backend && python manage.py collectstatic --noinput",
        status=503,
        content_type="text/plain; charset=utf-8",
    )
