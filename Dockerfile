# Stage 1: build React SPA into backend/static/frontend (matches vite outDir)
FROM node:22-bookworm-slim AS frontend_build
WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

# Stage 2: Django + WhiteNoise + Gunicorn
FROM python:3.12-slim-bookworm
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /app/backend
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ /app/backend/
COPY --from=frontend_build /app/backend/static/frontend /app/backend/static/frontend
RUN python manage.py collectstatic --noinput
RUN python manage.py migrate --noinput
ENV DJANGO_DEBUG=false
ENV DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1,0.0.0.0
ENV DJANGO_SECRET_KEY=docker-change-me-use-real-secret-in-production
EXPOSE 8000
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "2"]
