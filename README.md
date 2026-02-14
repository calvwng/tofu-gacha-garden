# Tofu's Garden Gacha — Build & Run

This workspace is a single static HTML app. No build step is required.

Quick ways to run locally:

- **Open:** Open `tofu-gacha-garden.html` directly in a browser (double-click or drag to a browser).
- **Serve (quick, recommended):** Run a simple HTTP server from the project root and open the URL below.

```bash
# Python 3
python3 -m http.server 8000
# then open: http://localhost:8000/tofu-gacha-garden.html

# or using npx http-server
npx http-server -p 8000
# then open: http://localhost:8000/tofu-gacha-garden.html
```

- **VS Code Live Server:** Install the Live Server extension and click "Go Live" while `tofu-gacha-garden.html` is active.

- **Codespaces / Devcontainer:** Use the same `python3 -m http.server 8000` command and forward port `8000` in Codespaces, then open the forwarded URL.

Notes:

- The page references an image named `Tofu in capsule.jpg`. If that image is missing, either add it to the workspace root or edit `tofu-gacha-garden.html` to point to an existing image.
- All styling and scripts are loaded via CDN (Tailwind, Google Fonts, canvas-confetti), so the app works offline only if those assets are cached.

Files:

- See the main file: [tofu-gacha-garden.html](tofu-gacha-garden.html)
- This README: [README.md](README.md)
