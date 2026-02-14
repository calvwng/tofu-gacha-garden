#!/usr/bin/env bash
# Lightweight helper to run Python's built-in HTTP server with sensible defaults.
# Usage:
#   ./serve.sh            # serve on 127.0.0.1:8000
#   ./serve.sh 8080       # serve on 127.0.0.1:8080
#   ./serve.sh --public   # serve on 0.0.0.0:8000 (accessible from other hosts)
#   ./serve.sh --open     # open the URL in the default browser after starting
#   ./serve.sh --help     # show this help

set -euo pipefail

PORT=8000
BIND=127.0.0.1
OPEN=false

print_help() {
  sed -n '1,120p' "$0" | sed -n '1,28p'
}

# parse args (very small parser)
for arg in "$@"; do
  case "$arg" in
    -h|--help)
      print_help
      exit 0
      ;;
    --public)
      BIND=0.0.0.0
      ;;
    --open)
      OPEN=true
      ;;
    --no-open)
      OPEN=false
      ;;
    --*)
      echo "Unknown option: $arg" >&2
      exit 2
      ;;
    *)
      # first positional is port
      if [[ "$arg" =~ ^[0-9]+$ ]]; then
        PORT="$arg"
      else
        echo "Unexpected argument: $arg" >&2
        exit 2
      fi
      ;;
  esac
done

URL="http://${BIND}:${PORT}/"

echo "Serving directory: $(pwd)"
echo "Serving at: ${URL} (bind=${BIND})"

if [ "$OPEN" = true ]; then
  # try python webbrowser first, fall back to xdg-open
  if command -v python3 >/dev/null 2>&1; then
    python3 -m webbrowser "${URL}" >/dev/null 2>&1 || true &
  elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open "${URL}" >/dev/null 2>&1 || true &
  fi
fi

# Run the native Python HTTP server
exec python3 -m http.server "$PORT" --bind "$BIND"
