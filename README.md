# Aeolo

**One-click workspace launcher** — build `.bat` (Windows) or `.sh` (macOS) scripts in the browser. No backend: your stack never leaves your machine.

**Repository:** [https://github.com/cmatonakis/aeolo](https://github.com/cmatonakis/aeolo)

## Run locally

Open `index.html` in a modern browser. The app loads [Tailwind CSS](https://tailwindcss.com/) from a CDN, so an internet connection is required.

## Project layout

| Path | Role |
|------|------|
| `index.html` | Markup |
| `css/styles.css` | Custom CSS |
| `js/tailwind-config.js` | Tailwind CDN theme |
| `js/app.js` | App logic |

## Publish this repo on GitHub

If the repository does not exist yet:

1. On GitHub: **New repository** → owner `cmatonakis`, name `aeolo`, **Public** → create **without** README (this project already has one).
2. In this folder (PowerShell):

```powershell
git init
git add index.html css/ js/ README.md .gitignore
git commit -m "Initial commit: Aeolo workspace launcher"
git branch -M main
git remote add origin https://github.com/cmatonakis/aeolo.git
git push -u origin main
```

3. Optional — **GitHub Pages:** Repository → **Settings** → **Pages** → Source: **Deploy from a branch** → branch `main`, folder `/ (root)`.

After the first push, the links in the app (navbar GitHub icon, Guide → “Check GitHub”) will resolve correctly.

## License

Add a `LICENSE` file if you want to specify terms (e.g. MIT).
