import json
import logging
from pathlib import Path

from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.mail import EmailMessage
from django.core.validators import validate_email
from django.http import FileResponse, HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

logger = logging.getLogger(__name__)


@csrf_exempt
@require_http_methods(["POST"])
def contact_submission(request):
    """
    Accept JSON from the site contact form and email CONTACT_TO_EMAIL.
    CSRF-exempt: SPA posts via Vite proxy without Django's CSRF cookie flow; honeypot + validation mitigate abuse.
    """
    try:
        data = json.loads(request.body.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError):
        return JsonResponse({"detail": "Invalid JSON."}, status=400)

    if (data.get("website") or "").strip():
        logger.info("contact_submission: honeypot filled, ignored")
        return JsonResponse({"ok": True})

    first = (data.get("firstName") or "").strip()
    last = (data.get("lastName") or "").strip()
    email = (data.get("email") or "").strip()
    phone = (data.get("phone") or "").strip()
    message = (data.get("message") or "").strip()

    if not first or not email or not message:
        return JsonResponse(
            {"detail": "First name, email, and message are required."},
            status=400,
        )

    if len(first) > 80 or len(last) > 80 or len(phone) > 40 or len(message) > 8000:
        return JsonResponse({"detail": "A field is too long."}, status=400)

    if len(email) > 254:
        return JsonResponse({"detail": "Invalid email."}, status=400)

    try:
        validate_email(email)
    except ValidationError:
        return JsonResponse({"detail": "Invalid email."}, status=400)

    to_addr = getattr(settings, "CONTACT_TO_EMAIL", "fasmidga@gmail.com")
    from_addr = getattr(settings, "DEFAULT_FROM_EMAIL", "noreply@localhost")
    subject = f"[FASMG contact] {first} {last}".strip()
    subject = subject[:998]
    body = (
        f"From: {first} {last}\n"
        f"Email: {email}\n"
        f"Phone: {phone or '(not provided)'}\n\n"
        f"Message:\n{message}\n"
    )

    try:
        msg = EmailMessage(
            subject=subject,
            body=body,
            from_email=from_addr,
            to=[to_addr],
            reply_to=[email],
        )
        msg.send()
    except Exception:
        logger.exception("contact_submission: send_mail failed")
        return JsonResponse(
            {"detail": "Could not send your message right now. Please try again later or email us directly."},
            status=503,
        )

    return JsonResponse({"ok": True})


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
