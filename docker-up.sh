#!/usr/bin/env bash
# Start FASMG via Docker Compose from this repo (avoids running another project's compose by mistake).
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec docker compose -f "$ROOT/docker-compose.yml" --project-directory "$ROOT" up --build "$@"
