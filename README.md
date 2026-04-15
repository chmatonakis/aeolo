# Aeolo

**One-click workspace launcher** — build `.bat` (Windows) or `.sh` (macOS) scripts in the browser. No backend: your stack never leaves your machine.

**Repository:** [https://github.com/chmatonakis/aeolo](https://github.com/chmatonakis/aeolo)

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

The project already has a local Git repository (`main` branch, initial commit). The remote **https://github.com/chmatonakis/aeolo** must exist on GitHub (create it if you see 404).

1. On GitHub: **New repository** → owner `chmatonakis`, name `aeolo`, **Public** → create **without** README, `.gitignore`, or license (this repo already includes them).
2. In this folder (PowerShell), link and push:

```powershell
cd "c:\Users\chmat\Dropbox\ΕΡΓΑΛΕΙΑ\AEOLO"
git remote add origin https://github.com/chmatonakis/aeolo.git
git push -u origin main
```

If `origin` already exists, use `git remote set-url origin https://github.com/chmatonakis/aeolo.git` instead.

3. Optional — **GitHub Pages:** Repository → **Settings** → **Pages** → Source: **Deploy from a branch** → branch `main`, folder `/ (root)`.

After the first push, the links in the app (navbar GitHub icon, Guide → “Check GitHub”) will resolve correctly.

## License

Add a `LICENSE` file if you want to specify terms (e.g. MIT).
