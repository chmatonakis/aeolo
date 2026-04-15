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
            app: `<svg class="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 19.5 3h-15a2.25 2.25 0 0 0-2.25 2.25v9.75" /></svg>`
        };

        const WIN_BTN_ACTIVE = 'px-8 py-3 text-[10px] font-black rounded-xl transition-all bg-white shadow-sm text-slate-900 uppercase tracking-widest';
        const BTN_INACTIVE = 'px-8 py-3 text-[10px] font-black rounded-xl transition-all text-slate-400 hover:text-slate-600 uppercase tracking-widest';
        const NAV_ACTIVE = 'text-xs font-black uppercase tracking-widest text-indigo-600 border-b-2 border-indigo-600 pb-1 transition-all';
        const NAV_INACTIVE = 'text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 pb-1 transition-all border-b-2 border-transparent';

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
                    if (it.type === 'url') {
                        if (!/^https?:\/\//i.test(v)) v = 'https://' + v;
                        s += b === 'default' ? `start "" "${v}"\r\n` : `start "" ${b} "${v}"\r\n`;
                    } else {
                        s += `start "" "${v}"\r\n`;
                    }
                    if (i < active.length - 1 && d > 0) s += `timeout /t ${d} /nobreak > nul\r\n`;
                    s += '\r\n';
                });
            } else {
                s += '#!/bin/bash\n# Built by Aeolo.app\n\n';
                active.forEach((it, i) => {
                    let v = it.value.trim().replace(/^["']|["']$/g, '');
                    if (it.type === 'url' && !/^https?:\/\//i.test(v)) v = 'https://' + v;
                    s += `open "${v}"\n`;
                    if (i < active.length - 1 && d > 0) s += `sleep ${d}\n`;
                    s += '\n';
                });
            }
            return s;
        }

        function refreshScript() {
            const code = generateCode();
            let colored = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const commentRegex = currentOS === 'windows' ? /^(::.*)$/gm : /^(#.*)$/gm;
            colored = colored.replace(commentRegex, '<span class="text-slate-500 italic">$1</span>');
            dom.preview.innerHTML = colored;
        }

        function renderItems() {
            if (items.length === 0) {
                dom.list.innerHTML =
                    '<div class="text-center py-24 border-2 border-dashed border-slate-100 rounded-[3rem] text-slate-200 font-black uppercase tracking-[0.7em] text-[10px]">Your stack is empty</div>';
                return;
            }
            dom.list.innerHTML = items
                .map(
                    (it) => `
                    <div class="flex items-center gap-6 group" data-id="${it.id}">
                        <div class="w-16 h-16 flex items-center justify-center bg-slate-50 rounded-[1.5rem] shrink-0 border border-slate-100 group-hover:border-indigo-100 group-hover:bg-white transition-all shadow-sm">
                            ${icons[it.type]}
                        </div>
                        <input type="text" data-action="edit" value="${it.value}"
                            placeholder="${it.type === 'url' ? 'https://...' : currentOS === 'windows' ? 'C:\\\\Path\\\\...' : '/Users/Path/...'}"
                            class="flex-1 bg-slate-50 border border-slate-200 rounded-[1.5rem] px-8 py-6 outline-none focus:ring-2 focus:ring-indigo-500 font-bold text-slate-900 text-sm transition-all shadow-sm">
                        <button data-action="del" class="p-3 text-slate-200 hover:text-red-500 transition-all hover:bg-red-50 rounded-2xl shrink-0">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18 18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                `
                )
                .join('');
        }

        dom.list.addEventListener('input', (e) => {
            if (e.target.dataset.action === 'edit') {
                const id = parseInt(e.target.closest('[data-id]').dataset.id, 10);
                const item = items.find((i) => i.id === id);
                if (item) {
                    item.value = e.target.value;
                    refreshScript();
                }
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
