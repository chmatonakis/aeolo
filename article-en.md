# Aeolo: What It Is, Who It's For — and Who It Isn't For

*A tool that does exactly what it says, nothing more.*

---

Every morning, before you start working, you open the same things. Your bank account, email, the ERP, the invoices folder. Each one separately, in order, from scratch, every single day.

This isn't a serious problem. You're not losing hours. You're losing 8–10 minutes and a bit of mental energy. But if that repeats every day for years, it's worth having a solution.

That solution already existed before Aeolo: a simple `.bat` file on Windows or `.sh` on Mac. Aeolo just builds that file for you, through a clean interface, without requiring you to know anything about code.

---

## Who It's For

**It's for you if:**

You have a consistent daily startup routine that combines URLs (websites) **and** local things — folders on your computer, files, applications. If your routine is only browser tabs, your browser already handles that on its own.

Typical users who find it useful:

- Accountants and financial professionals who open web banking, ERP systems, government tax portals, and client folders every morning
- Administrative staff with a fixed «startup kit» (email, intranet, daily folder)
- Freelancers juggling multiple projects who want a separate routine per client
- HR managers who want to hand a new employee a single file that automatically opens everything they need to get started

The common thread: **a repetitive routine, a mix of web and local files, and no interest in technical tinkering**.

---

## Who It Isn't For

Let's be direct, because knowing what a tool *doesn't* do is just as useful as knowing what it does.

**It's not for you if:**

- You only open browser tabs — Chrome, Edge, and Firefox already do this with Tab Groups or extensions
- You're a developer or power user — you can write the script yourself in five minutes, or you already use Raycast, Alfred, or AutoHotkey
- You want your computer to remember «what I had open yesterday and where each window was» — other tools handle that (Ikuna, PowerToys Workspaces, Workspace+) and Aeolo doesn't
- Your corporate computer doesn't allow running `.bat` files — many IT departments block this by default
- You're looking for something that automates actions like clicking or typing (macros) — Aeolo opens things, it doesn't interact with them

---

## How It Works in Practice

You go to [aeolo.app](https://www.aeolo.app), add URLs, folders, files, or applications to a list — in the order you want them to open. You set how many seconds to wait between each one (so your computer doesn't get overwhelmed). You download the file. Double-click it every morning.

No account. No installation. No payment.

If something in your routine changes — a new folder, a new URL — you come back, make the change, download a new file. Or if you've saved a JSON backup, import it and edit from there.

---

## Security — The Question You Should Ask

It's reasonable and right to ask: «What exactly does this file do? Can I trust it?»

**The straightforward answer:** There's nothing hidden. The `.bat` or `.sh` file you download is **plain text**. You can open it with Notepad (Windows) or any text editor and read every single line.

It looks like this:

```
@echo off
start "" "https://mail.google.com"
timeout /t 2
start "" "C:\Users\John\Documents\Clients"
```

That's it. No installation, no background process, no server connection. The script runs and closes.

**What happens to your data?** Your URLs, folder paths, and file names go nowhere. Aeolo runs entirely in your browser. There is no server receiving them. You can verify this yourself by opening your browser's Developer Tools and confirming that no request is sent containing your form data.

**The SmartScreen issue:** When you download the `.bat`, Windows may show a warning («Windows protected your PC»). This happens with **any** file downloaded from the internet that doesn't carry a corporate digital signature — regardless of what's inside it. It doesn't mean the file is dangerous; it means it isn't signed by a large company. The fix: right-click → Properties → check «Unblock». If you want to be completely sure, read the file in Notepad first.

**The source code** of the application is publicly available on [GitHub](https://github.com/chmatonakis/aeolo). Anyone can read it.

---

## What It Doesn't Do — and Why

Aeolo **doesn't remember** what you had open yesterday. It doesn't learn your routine automatically. It doesn't sync to the cloud. It doesn't have a mobile app. It doesn't position windows on your screen.

These aren't oversights. They're the result of a deliberate choice: to stay a tool that does one thing well, without complexity you don't need.

---

## What It Costs

Nothing. There's no paid plan, no trial, no waitlist. There's a donation button if you find it useful, but nothing changes if you don't use it.

---

## The Final Question

Is it worth trying? If your routine matches what's described above — probably yes. You need five minutes to build your first script and you lose nothing if you decide it's not for you.

If it doesn't match — better to know that before you spend the time.

---

*Aeolo was built by an economist in Crete who had exactly this problem and couldn't find a solution that didn't require installation or coding knowledge. The source code is open on [GitHub](https://github.com/chmatonakis/aeolo).*
