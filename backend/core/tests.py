import json

from django.core import mail
from django.test import TestCase, override_settings


@override_settings(
    CONTACT_TO_EMAIL="to@example.com",
    DEFAULT_FROM_EMAIL="from@example.com",
    EMAIL_BACKEND="django.core.mail.backends.locmem.EmailBackend",
)
class ContactSubmissionTests(TestCase):
    def test_contact_sends_mail(self):
        mail.outbox.clear()
        payload = {
            "firstName": "Pat",
            "lastName": "Lee",
            "email": "pat@example.com",
            "phone": "555-0100",
            "message": "Hello from the test suite.",
            "website": "",
        }
        r = self.client.post(
            "/api/contact/",
            data=json.dumps(payload),
            content_type="application/json",
        )
        self.assertEqual(r.status_code, 200)
        self.assertEqual(r.json(), {"ok": True})
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].to, ["to@example.com"])
        self.assertEqual(mail.outbox[0].reply_to, ["pat@example.com"])
        self.assertIn("Pat Lee", mail.outbox[0].subject)

    def test_honeypot_skips_mail(self):
        mail.outbox.clear()
        r = self.client.post(
            "/api/contact/",
            data=json.dumps({"website": "http://spam.example"}),
            content_type="application/json",
        )
        self.assertEqual(r.status_code, 200)
        self.assertEqual(len(mail.outbox), 0)

    def test_missing_fields_400(self):
        r = self.client.post(
            "/api/contact/",
            data=json.dumps({"firstName": "", "email": "a@b.co", "message": "x"}),
            content_type="application/json",
        )
        self.assertEqual(r.status_code, 400)
