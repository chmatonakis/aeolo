# Aeolo — One-Click Workspace Launcher

**Build `.bat` (Windows) or `.sh` (macOS) scripts that open your URLs, folders, files, and apps in one click.**

No backend. No installation. No account. Everything runs in your browser — your data never leaves your machine.

🌐 **[aeolo.app](https://www.aeolo.app)**

---

## What it does

You add URLs, local folders, files, and applications to a list — in the order you want them to open. You set a delay between launches (so your machine doesn't get overwhelmed). You download the script. Double-click it every morning.

That's it.

The generated `.bat` or `.sh` file is plain text. You can open it in Notepad or any text editor and read every line before running it.

---

## Who it's for

- Accountants and financial professionals who open web banking, ERP systems, and client folders every morning
- Administrative staff with a fixed daily startup routine
- Freelancers who want a separate launch script per client or project
- HR managers who want to hand a new employee a single file that opens everything they need on day one

**Common thread:** a repetitive daily routine that mixes browser tabs with local files and applications, and no interest in writing code.

## Who it isn't for

- **Browser-only users** — Tab Groups or session extensions already handle that
- **Developers and power users** — you can write this in five minutes yourself, or use Raycast/Alfred/AutoHotkey
- **Anyone who needs window layout restore** — tools like Ikuna, PowerToys Workspaces, or Workspace+ do that; Aeolo doesn't
- **Macro automation** — Aeolo opens things, it doesn't click or type

---

## Comparison

| | Aeolo | Browser Extensions | Workspace Restore tools | Macro tools |
|---|---|---|---|---|
| Open URLs | ✓ | ✓ | ✓ | ✓ |
| Open local folders & apps | ✓ | ✗ | ✓ | ✓ |
| No installation required | ✓ | ✗ | ✗ | ✗ |
| No coding needed | ✓ | ✓ | ~ | ✗ |
| Shareable as a single file | ✓ | ✗ | ✗ | ✗ |
| 100% private — nothing leaves your machine | ✓ | ✗ | ~ | ✓ |
| Restores window positions | ✗ | ✗ | ✓ | ~ |
| Zero background RAM | ✓ | ✗ | ✗ | ✗ |
| Free | ✓ | ~ | ~ | ~ |

*~ = partial or varies by tool*

**Workspace Restore tools** (Ikuna, Workspace+, Prefetch, PowerToys Workspaces, etc.) remember what you had open and where each window was. Aeolo doesn't do that — it runs a fixed routine you define. Different philosophy for the same goal.

---

## Security

The `.bat` / `.sh` file Aeolo generates is plain text. Open it in Notepad before running it to verify every line.

Aeolo runs entirely client-side. No server receives your URLs, folder paths, or filenames. You can confirm this by opening your browser's Developer Tools and observing that no request is sent containing your form data.

**Windows SmartScreen warning:** Any file downloaded from the internet without a corporate code-signing certificate triggers this warning — regardless of content. To unblock: right-click the file → Properties → check **Unblock** → Apply. If in doubt, read the file first.

---

## How to run locally

Open `index.html` in a modern browser. The app loads [Tailwind CSS](https://tailwindcss.com/) via CDN, so an internet connection is required.

---

## Project layout

| Path | Role |
|------|------|
| `index.html` | Markup and all views |
| `css/styles.css` | Custom CSS |
| `js/tailwind-config.js` | Tailwind CDN theme config |
| `js/app.js` | App logic (generator, presets, import/export, drag-and-drop) |
| `js/i18n.js` | Internationalisation (EN / EL) |

---

## Built by

[Charalampos Matonakis](https://github.com/chmatonakis) — economist based in Crete, Greece.  
Built because the problem was real and no existing tool solved it without installation or coding knowledge.

---

## License

MIT — see `LICENSE` file.
