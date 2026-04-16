(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        let currentOS = 'windows';
        let items = [
            { id: 1, type: 'url', value: 'https://mail.google.com' },
            { id: 2, type: 'url', value: 'https://github.com/chmatonakis/aeolo' }
        ];

        const dom = {
            btnWin: document.getElementById('os-windows'),
            btnMac: document.getElementById('os-mac'),
            browser: document.getElementById('browser-select'),
            delay: document.getElementById('delay-input'),
            filename: document.getElementById('filename-input'),
            extDisp: document.getElementById('file-extension-display'),
            badge: document.getElementById('preview-badge'),
            macNote: document.getElementById('mac-note'),
            winTroubleshoot: document.getElementById('win-troubleshoot'),
            previewOpenGuide: document.getElementById('preview-open-guide'),
            list: document.getElementById('items-list'),
            preview: document.getElementById('code-preview'),
            dl: document.getElementById('download-btn'),
            copyBtn: document.getElementById('copy-code-btn'),
            copyLabel: document.getElementById('copy-code-label'),
            copyFeedback: document.getElementById('copy-feedback'),
            pasteExtHint: document.getElementById('paste-ext-hint'),
            pasteMacExtra: document.getElementById('paste-mac-extra'),
            importInput: document.getElementById('import-routine-input'),
            importBtn: document.getElementById('import-routine-btn'),
            exportJsonBtn: document.getElementById('export-json-btn'),
            importFeedback: document.getElementById('import-feedback'),
            addBtns: document.querySelectorAll('[data-add]'),
            viewGenBtn: document.getElementById('view-generator'),
            viewStoryBtn: document.getElementById('view-story'),
            viewGuideBtn: document.getElementById('view-guide'),
            genContainer: document.getElementById('generator-container'),
            storyContainer: document.getElementById('story-container'),
            guideContainer: document.getElementById('guide-container'),
            logo: document.getElementById('nav-logo')
        };

        const icons = {
            url: `<svg class="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>`,
            folder: `<svg class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>`,
            file: `<svg class="w-6 h-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`,
            app: `<svg class="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 19.5 3h-15a2.25 2.25 0 0 0-2.25 2.25v9.75" /></svg>`
        };

        const WIN_BTN_ACTIVE = 'px-8 py-3 text-[10px] font-black rounded-xl transition-all bg-white shadow-sm text-slate-900 uppercase tracking-widest';
        const BTN_INACTIVE = 'px-8 py-3 text-[10px] font-black rounded-xl transition-all text-slate-400 hover:text-slate-600 uppercase tracking-widest';
        const NAV_ACTIVE = 'text-xs font-black uppercase tracking-widest text-indigo-600 border-b-2 border-indigo-600 pb-1 transition-all';
        const NAV_INACTIVE = 'text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 pb-1 transition-all border-b-2 border-transparent';

        const WIN_START_RE = /^\s*start\s+""\s+(?:(msedge|chrome|firefox)\s+)?"([^"]*)"\s*$/i;
        const WIN_TIMEOUT_RE = /^\s*timeout\s+\/t\s+(\d+)\b/i;
        const MAC_OPEN_RE = /^\s*open\s+"([^"]*)"\s*$/;
        const MAC_SLEEP_RE = /^\s*sleep\s+(\d+)\b/i;

        let importFeedbackTimer;
        let dragSrcId = null;

        function escapeAttr(str) {
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;');
        }

        function escapeHtml(str) {
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }

        /** Human-readable label under the field (no network — real page titles are blocked by CORS). */
        function subtitleFromValue(value) {
            const v = String(value || '').trim();
            if (!v) return '—';
            if (/^https?:\/\//i.test(v) || /^www\./i.test(v)) {
                try {
                    const href = /^www\./i.test(v) ? 'https://' + v : v;
                    const u = new URL(href);
                    const host = u.hostname.replace(/^www\./i, '') || u.hostname;
                    let path = u.pathname || '';
                    if (path === '/') path = '';
                    const q = u.search || '';
                    const tail = path + q;
                    if (!tail) return host;
                    const max = 56;
                    const slice = tail.length > max ? tail.slice(0, max - 1) + '…' : tail;
                    return `${host}${slice}`;
                } catch {
                    return 'Invalid URL';
                }
            }
            const norm = v.replace(/[/\\]+$/, '');
            const parts = norm.split(/[/\\]/).filter(Boolean);
            const base = parts.length ? parts[parts.length - 1] : norm;
            return base || '—';
        }

        function updateRowSubtitle(row, value) {
            const el = row && row.querySelector('[data-subtitle]');
            if (el) el.textContent = subtitleFromValue(value);
        }

        /** Same label as under the input, safe for shell comments (batch % escaped). */
        function actionCommentForItem(it, os) {
            const label = subtitleFromValue(it.value.trim());
            const t = String(label)
                .trim()
                .replace(/\r?\n/g, ' ')
                .slice(0, 220);
            if (!t) return '';
            if (os === 'windows') {
                return `REM ${t.replace(/%/g, '%%')}\r\n`;
            }
            return `# ${t}\n`;
        }

        function sanitizeFilename(name) {
            const s = String(name || '')
                .replace(/[<>:"/\\|?*\x00-\x1f]/g, '')
                .replace(/\.(bat|sh|json)$/i, '')
                .trim()
                .slice(0, 180);
            return s || 'aeolo_routine';
        }

        /** Documents, spreadsheets, and extra launch targets (.bat/.cmd chain on Windows; .sh run via bash on macOS). */
        const FILE_DOC_EXT_RE =
            /\.(xlsx?|xlsm|xlsb|csv|docx?|docm|dotx|pdf|pptx?|pptm|txt|rtf|md|json|xml|odt|ods|odp|numbers|pages|key|onetoc2|vsdx|mpp|dwg|dxf|bat|cmd|sh)$/i;

        const MAC_BASH_RE = /^\s*bash\s+"([^"]*)"\s*$/;

        function inferItemType(value) {
            const v = String(value || '').trim();
            if (/^https?:\/\//i.test(v)) return 'url';
            if (/\.(exe|com|msi)(\s|$)/i.test(v) || v.toLowerCase().endsWith('.exe')) return 'app';
            if (/\.app(\s|\/|$)/i.test(v) || v.toLowerCase().endsWith('.app')) return 'app';
            if (FILE_DOC_EXT_RE.test(v)) return 'file';
            return 'folder';
        }

        function parseWindowsBat(text) {
            const lines = String(text).split(/\r?\n/);
            const raw = [];
            let firstTimeout = null;
            for (const line of lines) {
                const t = line.trim();
                if (!t) continue;
                const tm = t.match(WIN_TIMEOUT_RE);
                if (tm) {
                    const d = parseInt(tm[1], 10);
                    if (raw.length > 0 && firstTimeout === null && !Number.isNaN(d)) firstTimeout = d;
                    continue;
                }
                const sm = t.match(WIN_START_RE);
                if (sm) {
                    raw.push({ value: sm[2], browserToken: sm[1] ? sm[1].toLowerCase() : null });
                }
            }
            if (!raw.length) return { os: 'windows', items: [], delay: 0, browser: 'msedge', filename: '' };
            const delay = firstTimeout !== null ? Math.min(10, Math.max(0, firstTimeout)) : 0;
            const firstTok = raw.find((r) => r.browserToken);
            const browser = firstTok && firstTok.browserToken ? firstTok.browserToken : 'default';
            const items = raw.map((r) => ({
                type: r.browserToken ? 'url' : inferItemType(r.value),
                value: r.value
            }));
            return { os: 'windows', items, delay, browser, filename: '' };
        }

        function parseMacSh(text) {
            const lines = String(text).split(/\r?\n/);
            const values = [];
            let firstSleep = null;
            for (const line of lines) {
                const t = line.trim();
                if (!t) continue;
                const sm = t.match(MAC_SLEEP_RE);
                if (sm) {
                    const d = parseInt(sm[1], 10);
                    if (values.length > 0 && firstSleep === null && !Number.isNaN(d)) firstSleep = d;
                    continue;
                }
                const bm = t.match(MAC_BASH_RE);
                if (bm) {
                    values.push(bm[1]);
                    continue;
                }
                const om = t.match(MAC_OPEN_RE);
                if (om) values.push(om[1]);
            }
            if (!values.length) return { os: 'mac', items: [], delay: 0, browser: 'default', filename: '' };
            const delay = firstSleep !== null ? Math.min(10, Math.max(0, firstSleep)) : 0;
            const items = values.map((v) => ({ type: inferItemType(v), value: v }));
            return { os: 'mac', items, delay, browser: 'default', filename: '' };
        }

        function tryParseRoutineJson(text) {
            let o;
            try {
                o = JSON.parse(String(text).trim());
            } catch {
                return null;
            }
            if (!o || !Array.isArray(o.items) || o.items.length === 0) return null;
            if (o.aeoloRoutine != null && o.aeoloRoutine !== 1) return null;
            const validTypes = new Set(['url', 'folder', 'file', 'app']);
            const parsedItems = [];
            for (const it of o.items) {
                if (!it || typeof it.value !== 'string') continue;
                const v = it.value.trim();
                if (!v) continue;
                const type = validTypes.has(it.type) ? it.type : inferItemType(v);
                parsedItems.push({ type, value: v });
            }
            if (!parsedItems.length) return null;
            const os = o.os === 'mac' || o.os === 'darwin' || o.os === 'macos' ? 'mac' : 'windows';
            const browser = ['default', 'msedge', 'chrome', 'firefox'].includes(o.browser) ? o.browser : 'msedge';
            const delay = Math.min(10, Math.max(0, parseInt(o.delay, 10) || 0));
            const filename = typeof o.filename === 'string' && o.filename.trim() ? sanitizeFilename(o.filename.trim()) : '';
            return { os, browser, delay, items: parsedItems, filename };
        }

        function parseRoutineFromFile(text, fileName) {
            const json = tryParseRoutineJson(text);
            if (json) return json;
            const name = (fileName || '').toLowerCase();
            if (name.endsWith('.sh')) {
                const m = parseMacSh(text);
                return m.items.length ? m : null;
            }
            if (name.endsWith('.bat') || name.endsWith('.cmd')) {
                const w = parseWindowsBat(text);
                return w.items.length ? w : null;
            }
            const w = parseWindowsBat(text);
            if (w.items.length) return w;
            const m = parseMacSh(text);
            return m.items.length ? m : null;
        }

        function showImportFeedback(message, isError) {
            const el = dom.importFeedback;
            if (!el) return;
            el.textContent = message;
            el.classList.remove('hidden', 'text-emerald-600', 'text-red-600');
            el.classList.add(isError ? 'text-red-600' : 'text-emerald-600');
            clearTimeout(importFeedbackTimer);
            importFeedbackTimer = setTimeout(() => {
                el.classList.add('hidden');
                el.textContent = '';
            }, 5000);
        }

        function applyImportedRoutine(data) {
            let nid = Date.now();
            items = data.items.map((it) => ({ id: nid++, type: it.type, value: it.value }));
            setPlatform(data.os);
            if (['default', 'msedge', 'chrome', 'firefox'].includes(data.browser)) {
                dom.browser.value = data.browser;
            }
            dom.delay.value = String(Math.min(10, Math.max(0, parseInt(data.delay, 10) || 0)));
            if (data.filename) dom.filename.value = sanitizeFilename(data.filename);
            renderItems();
            refreshScript();
        }

        function toggleView(view) {
            const containers = [dom.genContainer, dom.storyContainer, dom.guideContainer];
            const buttons = [dom.viewGenBtn, dom.viewStoryBtn, dom.viewGuideBtn];

            containers.forEach((c) => c.classList.add('hidden'));
            buttons.forEach((b) => (b.className = NAV_INACTIVE));

            if (view === 'generator') {
                dom.genContainer.classList.remove('hidden');
                dom.viewGenBtn.className = NAV_ACTIVE;
            } else if (view === 'story') {
                dom.storyContainer.classList.remove('hidden');
                dom.viewStoryBtn.className = NAV_ACTIVE;
            } else if (view === 'guide') {
                dom.guideContainer.classList.remove('hidden');
                dom.viewGuideBtn.className = NAV_ACTIVE;
            }
            window.scrollTo(0, 0);
        }

        dom.viewGenBtn.addEventListener('click', () => toggleView('generator'));
        dom.viewStoryBtn.addEventListener('click', () => toggleView('story'));
        dom.viewGuideBtn.addEventListener('click', () => toggleView('guide'));
        dom.logo.addEventListener('click', () => toggleView('generator'));
        dom.previewOpenGuide.addEventListener('click', () => toggleView('guide'));

        function setPlatform(os) {
            currentOS = os;
            const isWin = os === 'windows';

            dom.btnWin.className = isWin ? WIN_BTN_ACTIVE : BTN_INACTIVE;
            dom.btnMac.className = !isWin ? WIN_BTN_ACTIVE : BTN_INACTIVE;

            dom.extDisp.innerText = isWin ? '.bat' : '.sh';
            dom.badge.innerText = isWin ? '.bat' : '.sh';
            dom.macNote.classList.toggle('hidden', isWin);
            dom.winTroubleshoot.classList.toggle('hidden', !isWin);
            dom.pasteExtHint.textContent = isWin ? '.bat' : '.sh';
            dom.pasteMacExtra.classList.toggle('hidden', isWin);
            dom.browser.disabled = !isWin;
            dom.browser.parentElement.style.opacity = isWin ? '1' : '0.35';

            renderItems();
            refreshScript();
        }

        function generateCode() {
            const b = dom.browser.value;
            const d = parseInt(dom.delay.value, 10) || 0;
            const active = items.filter((it) => it.value.trim());
            let s = '';

            if (currentOS === 'windows') {
                s += '@echo off\r\nchcp 65001 > nul\r\n:: Built by Aeolo.app\r\n\r\n';
                active.forEach((it, i) => {
                    let v = it.value.trim().replace(/^["']|["']$/g, '');
                    s += actionCommentForItem(it, 'windows');
                    if (it.type === 'url') {
                        if (!/^https?:\/\//i.test(v)) v = 'https://' + v;
                        s += b === 'default' ? `start "" "${v}"\r\n` : `start "" ${b} "${v}"\r\n`;
                    } else {
                        /* folder, file, app: open path with default handler */
                        s += `start "" "${v}"\r\n`;
                    }
                    if (i < active.length - 1 && d > 0) s += `timeout /t ${d} /nobreak > nul\r\n`;
                    s += '\r\n';
                });
            } else {
                s += '#!/bin/bash\n# Built by Aeolo.app\n\n';
                active.forEach((it, i) => {
                    let v = it.value.trim().replace(/^["']|["']$/g, '');
                    s += actionCommentForItem(it, 'mac');
                    if (it.type === 'url') {
                        if (!/^https?:\/\//i.test(v)) v = 'https://' + v;
                        s += `open "${v}"\n`;
                    } else if (/\.sh$/i.test(v)) {
                        /* Run another shell routine (open would often only open the file in an editor). */
                        s += `bash "${v}"\n`;
                    } else {
                        s += `open "${v}"\n`;
                    }
                    if (i < active.length - 1 && d > 0) s += `sleep ${d}\n`;
                    s += '\n';
                });
            }
            return s;
        }

        function refreshScript() {
            const code = generateCode();
            let colored = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const commentRegex =
                currentOS === 'windows' ? /^(::.*|REM .*)$/gim : /^(#.*)$/gm;
            colored = colored.replace(commentRegex, '<span class="text-slate-500 italic">$1</span>');
            dom.preview.innerHTML = colored;
        }

        function reorderItems(fromId, toId, position) {
            const fromIndex = items.findIndex((i) => i.id === fromId);
            const toIndex = items.findIndex((i) => i.id === toId);
            if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) return;
            const moved = items[fromIndex];
            const next = items.filter((i) => i.id !== fromId);
            let insertIndex = next.findIndex((i) => i.id === toId);
            if (insertIndex < 0) return;
            if (position === 'after') insertIndex++;
            next.splice(insertIndex, 0, moved);
            items = next;
        }

        function clearStackRowDragClasses() {
            dom.list.querySelectorAll('.aeolo-stack-row').forEach((r) => {
                r.classList.remove('aeolo-row--dragging', 'aeolo-row--over-before', 'aeolo-row--over-after');
            });
        }

        function itemPlaceholder(type) {
            if (type === 'url') return 'https://...';
            if (type === 'file')
                return currentOS === 'windows'
                    ? 'C:\\\\...\\\\Report.xlsx or other.bat'
                    : '/Users/.../Report.xlsx or other.sh';
            if (type === 'app') return currentOS === 'windows' ? 'C:\\\\...\\\\App.exe' : '/Applications/App.app';
            return currentOS === 'windows' ? 'C:\\\\Path\\\\to\\\\folder' : '/Users/Path/to/folder';
        }

        function renderItems() {
            if (items.length === 0) {
                dom.list.innerHTML =
                    '<div class="text-center py-24 border-2 border-dashed border-slate-100 rounded-[3rem] text-slate-200 font-black uppercase tracking-[0.7em] text-[10px]">Your stack is empty</div>';
                return;
            }
            const gripSvg = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm8-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg>`;
            dom.list.innerHTML = items
                .map(
                    (it, idx) => `
                    <div class="flex items-start gap-2 sm:gap-3 group aeolo-stack-row rounded-[1.75rem] border border-transparent transition-shadow" data-id="${it.id}" aria-label="Step ${idx + 1}">
                        <span class="shrink-0 w-5 sm:w-6 text-center text-[10px] font-black tabular-nums text-slate-300 select-none pt-5 sm:pt-6" title="Step order">${idx + 1}</span>
                        <div class="aeolo-drag-handle shrink-0 flex items-center justify-center w-10 sm:w-11 h-16 rounded-xl text-slate-300 hover:text-indigo-500 hover:bg-indigo-50/70 cursor-grab active:cursor-grabbing select-none border border-transparent hover:border-indigo-100 transition-colors mt-1 sm:mt-2"
                            draggable="true" data-drag-handle title="Drag to reorder" aria-label="Drag to reorder">
                            ${gripSvg}
                        </div>
                        <div class="w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center bg-slate-50 rounded-[1.5rem] border border-slate-100 group-hover:border-indigo-100 group-hover:bg-white transition-all shadow-sm mt-1 sm:mt-2">
                            ${icons[it.type]}
                        </div>
                        <div class="flex-1 min-w-0 flex flex-col gap-1">
                            <input type="text" data-action="edit" value="${escapeAttr(it.value)}"
                                placeholder="${itemPlaceholder(it.type)}"
                                class="w-full bg-slate-50 border border-slate-200 rounded-[1.5rem] px-6 sm:px-8 py-5 sm:py-6 outline-none focus:ring-2 focus:ring-indigo-500 font-bold text-slate-900 text-sm transition-all shadow-sm">
                            <p class="text-[10px] leading-snug text-slate-400 font-semibold tracking-tight truncate px-2 sm:px-3 min-h-[1rem]" data-subtitle title="From URL or path (no network)">${escapeHtml(subtitleFromValue(it.value))}</p>
                        </div>
                        <button type="button" data-action="del" class="p-3 text-slate-200 hover:text-red-500 transition-all hover:bg-red-50 rounded-2xl shrink-0 mt-4 sm:mt-5">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18 18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                `
                )
                .join('');
        }

        dom.list.addEventListener('input', (e) => {
            if (e.target.dataset.action === 'edit') {
                const row = e.target.closest('[data-id]');
                const id = parseInt(row.dataset.id, 10);
                const item = items.find((i) => i.id === id);
                if (item) {
                    item.value = e.target.value;
                    updateRowSubtitle(row, item.value);
                    refreshScript();
                }
            }
        });

        dom.list.addEventListener('focusout', (e) => {
            if (e.target.dataset.action !== 'edit') return;
            const row = e.target.closest('[data-id]');
            if (!row || !dom.list.contains(row)) return;
            const id = parseInt(row.dataset.id, 10);
            const item = items.find((i) => i.id === id);
            if (!item) return;
            const nextType = inferItemType(item.value);
            if (nextType === item.type) return;
            item.type = nextType;
            const rel = e.relatedTarget;
            const refocusId =
                rel &&
                rel.matches &&
                rel.matches('input[data-action="edit"]') &&
                dom.list.contains(rel)
                    ? parseInt(rel.closest('[data-id]').dataset.id, 10)
                    : null;
            renderItems();
            refreshScript();
            if (refocusId != null && !Number.isNaN(refocusId)) {
                const inp = dom.list.querySelector(`[data-id="${refocusId}"] input[data-action="edit"]`);
                if (inp) inp.focus();
            }
        });

        dom.list.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-action="del"]');
            if (btn) {
                const id = parseInt(btn.closest('[data-id]').dataset.id, 10);
                items = items.filter((i) => i.id !== id);
                renderItems();
                refreshScript();
            }
        });

        dom.list.addEventListener('dragstart', (e) => {
            if (!e.target.closest('[data-drag-handle]')) {
                e.preventDefault();
                return;
            }
            const row = e.target.closest('[data-id]');
            if (!row || !dom.list.contains(row)) return;
            dragSrcId = parseInt(row.dataset.id, 10);
            if (Number.isNaN(dragSrcId)) {
                e.preventDefault();
                return;
            }
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', String(dragSrcId));
            try {
                e.dataTransfer.setDragImage(row, 24, 24);
            } catch {
                /* ignore */
            }
            row.classList.add('aeolo-row--dragging');
        });

        dom.list.addEventListener('dragend', () => {
            dragSrcId = null;
            clearStackRowDragClasses();
        });

        dom.list.addEventListener('dragover', (e) => {
            if (dragSrcId == null) return;
            const row = e.target.closest('[data-id]');
            if (!row || !dom.list.contains(row)) return;
            const overId = parseInt(row.dataset.id, 10);
            if (Number.isNaN(overId) || overId === dragSrcId) return;
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            const rect = row.getBoundingClientRect();
            const before = e.clientY < rect.top + rect.height / 2;
            dom.list.querySelectorAll('.aeolo-stack-row').forEach((r) => {
                r.classList.remove('aeolo-row--over-before', 'aeolo-row--over-after');
            });
            row.classList.add(before ? 'aeolo-row--over-before' : 'aeolo-row--over-after');
        });

        dom.list.addEventListener('drop', (e) => {
            if (dragSrcId == null) return;
            const row = e.target.closest('[data-id]');
            if (!row || !dom.list.contains(row)) return;
            e.preventDefault();
            const toId = parseInt(row.dataset.id, 10);
            if (Number.isNaN(toId) || toId === dragSrcId) {
                clearStackRowDragClasses();
                return;
            }
            const rect = row.getBoundingClientRect();
            const before = e.clientY < rect.top + rect.height / 2;
            reorderItems(dragSrcId, toId, before ? 'before' : 'after');
            dragSrcId = null;
            clearStackRowDragClasses();
            renderItems();
            refreshScript();
        });

        dom.addBtns.forEach((b) =>
            b.addEventListener('click', () => {
                items.push({ id: Date.now(), type: b.dataset.add, value: '' });
                renderItems();
                refreshScript();
                dom.list.lastElementChild.querySelector('input').focus();
            })
        );

        dom.btnWin.addEventListener('click', () => setPlatform('windows'));
        dom.btnMac.addEventListener('click', () => setPlatform('mac'));
        dom.browser.addEventListener('change', refreshScript);
        dom.delay.addEventListener('input', refreshScript);
        dom.filename.addEventListener('input', refreshScript);

        dom.importBtn.addEventListener('click', () => dom.importInput.click());
        dom.importInput.addEventListener('change', (e) => {
            const input = e.target;
            const file = input.files && input.files[0];
            input.value = '';
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
                const text = String(reader.result || '');
                const data = parseRoutineFromFile(text, file.name);
                if (!data || !data.items.length) {
                    showImportFeedback(
                        'Could not read this file. Use an Aeolo .bat or .sh export, or a JSON backup from “Save JSON backup”.',
                        true
                    );
                    return;
                }
                const base = file.name
                    .replace(/\.aeolo\.json$/i, '')
                    .replace(/\.(bat|sh|json)$/i, '')
                    .trim();
                const fname = data.filename || sanitizeFilename(base) || 'imported_routine';
                applyImportedRoutine({ ...data, filename: fname });
                showImportFeedback(`Imported ${data.items.length} item(s). Edit the stack and release when ready.`, false);
            };
            reader.onerror = () => showImportFeedback('Could not read the file.', true);
            reader.readAsText(file);
        });

        dom.exportJsonBtn.addEventListener('click', () => {
            const active = items.filter((it) => it.value.trim());
            if (!active.length) {
                showImportFeedback('Add at least one item to save a JSON backup.', true);
                return;
            }
            const payload = {
                aeoloRoutine: 1,
                os: currentOS,
                browser: dom.browser.value,
                delay: Math.min(10, Math.max(0, parseInt(dom.delay.value, 10) || 0)),
                filename: sanitizeFilename(dom.filename.value.trim() || 'aeolo_routine'),
                items: active.map(({ type, value }) => ({ type, value: value.trim() }))
            };
            const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = payload.filename + '.aeolo.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showImportFeedback('JSON backup downloaded.', false);
        });

        dom.dl.addEventListener('click', () => {
            const content = generateCode();
            const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            const ext = currentOS === 'windows' ? '.bat' : '.sh';
            a.href = url;
            a.download = (dom.filename.value.trim().replace(/\.[^/.]+$/, '') || 'aeolo_routine') + ext;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });

        function copyTextFallback(text) {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.position = 'fixed';
            ta.style.left = '-9999px';
            document.body.appendChild(ta);
            ta.select();
            try {
                document.execCommand('copy');
            } finally {
                document.body.removeChild(ta);
            }
        }

        let copyResetTimer;
        dom.copyBtn.addEventListener('click', async () => {
            const text = generateCode();
            const labelDefault = 'Copy code';
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(text);
                } else {
                    copyTextFallback(text);
                }
                dom.copyLabel.textContent = 'Copied!';
                dom.copyFeedback.textContent = 'Script copied to clipboard.';
                clearTimeout(copyResetTimer);
                copyResetTimer = setTimeout(() => {
                    dom.copyLabel.textContent = labelDefault;
                    dom.copyFeedback.textContent = '';
                }, 2200);
            } catch {
                dom.copyLabel.textContent = 'Copy failed';
                dom.copyFeedback.textContent = 'Could not copy; try selecting the preview text manually.';
                clearTimeout(copyResetTimer);
                copyResetTimer = setTimeout(() => {
                    dom.copyLabel.textContent = labelDefault;
                    dom.copyFeedback.textContent = '';
                }, 3500);
            }
        });

        renderItems();
        refreshScript();
    });
})();
