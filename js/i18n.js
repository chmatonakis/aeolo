/**
 * Aeolo UI i18n: English from HTML (default); Greek via EL map.
 * No persistence — every load starts in English.
 */
(function () {
    'use strict';

    const DOC_TITLE_EL = 'Aeolo — Εκκίνηση χώρου εργασίας με ένα κλικ';
    const META_DESC_EL =
        'Aeolo — δημιουργία σεναρίων Windows .bat ή macOS .sh για να ανοίγετε URLs, φακέλους, αρχεία, επιπλέον ρουτίνες και εφαρμογές με ένα κλικ. Ιδιωτικό, στον browser σας.';

    /** Strings used only from JavaScript (both languages). */
    const BOTH = {
        stack_empty: {
            en: 'Your stack is empty',
            el: 'Η στοίβα σου είναι άδεια'
        },
        invalid_url: { en: 'Invalid URL', el: 'Μη έγκυρο URL' },
        emdash: { en: '—', el: '—' },
        import_err_parse: {
            en: 'Could not read this file. Use an Aeolo .bat or .sh export, or a JSON backup from “Save JSON backup”.',
            el: 'Δεν ήταν δυνατή η ανάγνωση. Χρησιμοποίησε εξαγωγή Aeolo .bat ή .sh, ή JSON αντιγράφου από «Αποθήκευση JSON».'
        },
        import_success: {
            en: 'Imported {{count}} item(s). Edit the stack and release when ready.',
            el: 'Εισήχθησαν {{count}} στοιχεία. Επεξεργάσου τη στοίβα και «Άφησε το script» όταν είσαι έτοιμος.'
        },
        import_read_fail: { en: 'Could not read the file.', el: 'Αδυναμία ανάγνωσης αρχείου.' },
        import_json_need_items: {
            en: 'Add at least one item to save a JSON backup.',
            el: 'Πρόσθεσε τουλάχιστον ένα στοιχείο για αποθήκευση JSON.'
        },
        import_json_ok: { en: 'JSON backup downloaded.', el: 'Λήφθηκε αντίγραφο JSON.' },
        ui_copy_code: { en: 'Copy code', el: 'Αντιγραφή κώδικα' },
        copy_copied: { en: 'Copied!', el: 'Αντιγράφηκε!' },
        copy_ok: { en: 'Script copied to clipboard.', el: 'Το script αντιγράφηκε στο πρόχειρο.' },
        copy_failed: { en: 'Copy failed', el: 'Αποτυχία αντιγραφής' },
        copy_failed_detail: {
            en: 'Could not copy; try selecting the preview text manually.',
            el: 'Δεν ήταν δυνατή η αντιγραφή· δοκίμασε να επιλέξεις χειροκίνητα το κείμενο προεπισκόπησης.'
        },
        drag_title: { en: 'Drag to reorder', el: 'Σύρε για αναδιάταξη' },
        drag_aria: { en: 'Drag to reorder', el: 'Σύρε για αναδιάταξη' },
        step_order_title: { en: 'Step order', el: 'Σειρά βημάτων' },
        ph_url: { en: 'https://...', el: 'https://...' },
        ph_file_win: {
            en: 'C:\\\\...\\\\Report.xlsx or other.bat',
            el: 'C:\\\\...\\\\Report.xlsx ή other.bat'
        },
        ph_file_mac: {
            en: '/Users/.../Report.xlsx or other.sh',
            el: '/Users/.../Report.xlsx ή other.sh'
        },
        ph_app_win: { en: 'C:\\\\...\\\\App.exe', el: 'C:\\\\...\\\\App.exe' },
        ph_app_mac: { en: '/Applications/App.app', el: '/Applications/App.app' },
        ph_folder_win: { en: 'C:\\\\Path\\\\to\\\\folder', el: 'C:\\\\Διαδρομή\\\\προς\\\\φάκελο' },
        ph_folder_mac: { en: '/Users/Path/to/folder', el: '/Users/Path/to/folder' },
        row_aria: { en: 'Step {{n}}', el: 'Βήμα {{n}}' }
    };

    /** Greek only; English taken from DOM snapshot for matching data-i18n keys. */
    const EL = {
        nav_byline: 'Από τον Χαράλαμπο Ματονάκη',
        nav_generator: 'Δημιουργός',
        nav_why: 'Γιατί Aeolo;',
        nav_usecases: 'Περιπτώσεις χρήσης',
        nav_story: 'Η ιστορία μας',
        nav_guide: 'Οδηγός & ασφάλεια',
        nav_support: 'Στήριξη',
        nav_github_title: 'Πηγαίος κώδικας στο GitHub',
        hero_h1_html:
            'Ξεκλείδωσε την εργάσιμη μέρα σου <br/><span class="text-indigo-600">με μια ανάσα.</span>',
        hero_sub_html:
            'Αυτοματοποίησε την εκκίνηση του χώρου εργασίας σου με <b>άμεσα</b> ανοίγματα με ένα κλικ. Το Aeolo δημιουργεί υψηλής απόδοσης scripts για να <b>ανοίγεις</b> καρτέλες, φακέλους, αρχεία, επιπλέον ρουτίνες batch/shell και εφαρμογές στη στιγμή—<b>ιδιωτικά</b> και <b>ασφαλή</b> εξ ορισμού: όλα τρέχουν στον browser σου, δεν ανεβαίνει τίποτα, και η ρουτίνα σου μένει στον υπολογιστή σου.',
        engine_configuration: 'Ρυθμίσεις μηχανής',
        os_windows: 'Windows (.bat)',
        os_mac: 'macOS (.sh)',
        label_export_filename: 'Όνομα αρχείου εξαγωγής',
        label_browser: 'Browser στόχος',
        label_delay: 'Καθυστέρηση',
        delay_sec: 'ΔΕΥΤ',
        release_stack: 'Στοίβα εκκίνησης',
        import_routine: 'Εισαγωγή ρουτίνας',
        export_json_btn: 'Αποθήκευση αντιγράφου JSON',
        export_json_title:
            'Πλήρες αντίγραφο στοίβας, καθυστέρησης, browser και ονόματος — επανεισαγωγή όποτε θες.',
        add_url: 'Προσθήκη URL',
        add_folder: 'Προσθήκη φακέλου',
        add_file: 'Προσθήκη αρχείου',
        add_app: 'Προσθήκη εφαρμογής',
        aeolo_engine: 'Μηχανή Aeolo',
        release_script: 'Άφησε το script',
        paste_alt_title: 'Εναλλακτικά — επικόλληση & αποθήκευση',
        paste_li1_html:
            'Πάτα <b class="text-slate-200">Αντιγραφή κώδικα</b> — το ίδιο script με το <b class="text-slate-200">Άφησε το script</b>, στο πρόχειρο.',
        paste_li2_html:
            'Άνοιξε <b class="text-slate-200">απλό</b> επεξεργαστή κειμένου — π.χ. <b class="text-slate-200">Notepad</b>, <b class="text-slate-200">Notepad++</b>, <b class="text-slate-200">Brackets</b>, <b class="text-slate-200">Visual Studio Code</b> ή <b class="text-slate-200">Sublime Text</b>.',
        paste_li3_html:
            'Επικόλληση (<kbd class="px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-[9px]">Ctrl+V</kbd> / <kbd class="px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-[9px]">⌘V</kbd> σε Mac), μετά <b class="text-slate-200">Αποθήκευση ως</b>.',
        paste_li4_html:
            'Τύπος αρχείου <b class="text-slate-200">Όλα τα αρχεία (*.*)</b> / χωρίς φίλτρο επέκτασης. Όνομα όπως στην εξαγωγή (π.χ. <span class="text-indigo-300 font-mono">morning_routine</span><span id="paste-ext-hint" class="text-indigo-300 font-mono">.bat</span>). Αν ζητηθεί κωδικοποίηση, <b class="text-slate-200">UTF-8</b>.',
        paste_mac_extra_html:
            'Σε macOS, μετά την αποθήκευση του <b class="text-slate-300">.sh</b>, τρέξε <code class="bg-slate-900 px-1.5 py-0.5 rounded text-indigo-300 font-mono">chmod +x</code> στο αρχείο στο Terminal πριν το εκτελέσεις.',
        win_ts_title: 'Δεν τρέχει το αρχείο στα Windows;',
        win_ts_li1_html:
            'Δεξί κλικ στο ληφθέν <b class="text-slate-300">.bat</b> → <b class="text-slate-300">Ιδιότητες</b>.',
        win_ts_li2_html:
            'Στην καρτέλα <b class="text-slate-300">Γενικά</b>, τσέκαρε <b class="text-slate-300">Ξεμπλοκάρισμα</b> κάτω → <b class="text-slate-300">Εφαρμογή</b> / <b class="text-slate-300">OK</b>.',
        win_ts_more: 'Λεπτομέρειες:',
        mini_guide_link: 'Οδηγός & ασφάλεια',
        mac_note_html:
            'Για macOS, εκτέλεσε <code class="bg-slate-800 px-2 py-0.5 rounded text-indigo-300">chmod +x your_script.sh</code> στο Terminal και μετά τρέξε το script.',
        story_hero_title: 'Η ιστορία πίσω από το Aeolo',
        story_hero_byline: 'Από τον Χαράλαμπο Ματονάκη',
        story_pro_h: 'Ο επαγγελματίας',
        story_pro_p1_html:
            'Με λένε <span class="text-indigo-600">Χαράλαμπο Ματονάκη</span>. Ζω στην Κρήτη και είμαι Οικονομολόγος.',
        story_pro_p2_html:
            'Ειδικεύομαι σε <b>ασφάλιση και δημόσιες συντάξεις</b>. Η διαχείριση σύνθετων δεδομένων και ροών εργασίας είναι η καθημερινότητά μου.',
        story_pro_p3_html:
            'Πάντα είχα πάθος για τεχνολογία και έμαθα μόνος μου τις βάσεις προγραμματισμού και web. Αυτή η περιέργεια με οδήγησε να χτίσω μόνος μου ένα <b>επιτυχημένο niche SaaS</b> για τον ασφαλιστικό κλάδο.',
        story_spark_h: 'Το σπινθήρισμα',
        story_spark_p1_html:
            'Η ιδέα για το <b>Aeolo</b> γεννήθηκε από μια επαναλαμβανόμενη μηνιαία ενόχληση. Κάθε μήνα έπρεπε να ετοιμάζω τιμολόγια για τον λογιστή μου.',
        story_spark_p2_html:
            'Η ρουτίνα ήταν πάντα η ίδια: άνοιγμα τραπεζικών καρτελών, φακέλων εγγράφων και εφαρμογών τιμολόγησης. Έχανα 10 λεπτά μόνο στη «στήσιμο» του περιβάλλοντος.',
        story_spark_p3_html:
            'Ήθελα έναν τρόπο να τα ενεργοποιώ όλα με <b>ένα μόνο κλικ</b>. Χωρίς αναζήτηση, χωρίς αναμονή—άμεση ετοιμότητα.',
        story_myth_h: 'Γιατί Aeolo — και ο Αίολος στη μυθολογία',
        story_myth_p1_html:
            'Το όνομα <b>Aeolo</b> θυμίζει τον <b>Αίολο</b> (ελλ.: <span lang="el">Αίολος</span>) — στη μυθολογία, τον <b>φύλακα των ανέμων</b>. Είχε κλείσει <b>κάθε άνεμο</b> σε ένα δερμάτινο σακί ώστε να δίνονται <b>ένας-ένας</b>, με μέτρο, όταν το ταξίδι το χρειαζόταν.',
        story_myth_p2_html:
            'Στην <i>Οδύσσεια</i> του Ομήρου, οι σύντροφοι του Οδυσσέα έσπασαν αυτό το σχέδιο. Νόμιζαν ότι το σακί κρύβει θησαυρό και το άνοιξαν ενώ αυτός κοιμόταν—και σε μια στιγμή <b>ξεχύθηκαν όλοι οι άνεμοι μαζί</b>: όχι ένα αεράκι, αλλά <b>όλοι μονομιάς</b>, ένας τοίχος αέρα που ξέκλινε το πλοίο.',
        story_myth_p3_html:
            'Το <b>Aeolo</b> κάνει κάτι παρόμοιο στη δομή: όταν τρέχεις το script σου, <b>όλα όσα έχεις στοιβάξει ανοίγουν μαζί</b>—καρτέλες, φάκελοι, εφαρμογές—σε ένα σάρωμα, σαν <b>όλους τους ανέμους να βγαίνουν από το σακί</b>. Η διαφορά είναι το <b>κουμπί</b>: <b>όχι κατά λάθος</b>, όχι στον ύπνο σου. <i>Εσύ</i> διαλέγεις τη στιγμή· η «καταιγίδα» είναι <b>επίτηδες</b>. Ίδιο μεταφορικό με τον τίτλο: η εργάσιμη μέρα σου, <b>σε μια ανάσα</b>—μόνο όταν <i>εσύ</i> το πεις.',
        why_kicker: 'Για τον απαιτητικό επαγγελματία',
        why_title: 'Η απόλυτη γέφυρα',
        why_intro:
            'Τα περισσότερα εργαλεία παραγωγικότητας είναι κλειδωμένα στον browser ή απαιτούν βαριές εγκαταστάσεις. Το Aeolo κάθεται ακριβώς στη μέση.',
        why_ext_title: 'Προεκτάσεις browser',
        why_ext_desc:
            'Κλειδωμένες στο οικοσύστημα του browser. Δεν ανοίγουν τοπικούς φακέλους ή εφαρμογές desktop. Καταναλώνουν πολύ RAM.',
        why_aeolo_title: 'Aeolo script',
        why_aeolo_desc_html:
            'Ανοίγει URLs, τοπικούς φακέλους και βαριές εφαρμογές <span class="text-white font-black">.exe</span> ταυτόχρονα. Μηδενική χρήση RAM στο παρασκήνιο.',
        why_macro_title: 'Λογισμικό macro',
        why_macro_desc:
            'Υψηλό κόστος εκμάθησης. Απαιτεί βαριά εγκατάσταση. Συχνά μπλοκάρεται από IT εταιρειών.',
        why_zero_title: 'Μηδενική εγκατάσταση (φιλικό προς IT)',
        why_zero_body_html:
            'Χωρίς MSI, χωρίς δράματα δικαιωμάτων διαχειριστή. Το Aeolo είναι στατική σελίδα στον browser—σχεδιάζεις το script, κατεβάζεις ένα απλό <b class="text-slate-900">.bat</b> ή <b class="text-slate-900">.sh</b>, και η στοίβα σου ζει. Τα τμήματα ασφαλείας βλέπουν διαφανές κείμενο, όχι «μαύρο κουτί» agent.',
        why_delay_title: 'Έξυπνη μηχανή καθυστέρησης',
        why_delay_body:
            'Περιορίζει τις εκκινήσεις ανάμεσα σε βαριές εφαρμογές ώστε ο υπολογιστής να μένει ζωντανός. Ίδιος ρυθμός κάθε πρωί—πρώτα URLs, μετά εργαλεία δίσκου, με χρονισμό.',
        why_stat_label: 'Μέτρο αποδοτικότητας',
        why_stat_caption: 'Ώρες που γλιτώνεις ετησίως',
        why_stat_note_html:
            '~25 λεπτά/εβδομάδα × 50 εβδομάδες = 1.250 λεπτά ≈ <b class="text-slate-300">20,8 ώρες</b>—μια συντηρητική βάση για όποιον κουβαλάει browser, φακέλους και native apps κάθε πρωί.',
        usecases_kicker: 'Παγκόσμια εμβέλεια · Υψηλή αποδοτικότητα',
        usecases_title: 'Περιπτώσεις χρήσης υψηλής αποδοτικότητας',
        usecases_intro:
            'Ενδεικτικές στοίβες για επαγγελματίες που τιμούν την ακραία αποδοτικότητα.',
        uc_stack: 'Στοίβα',
        uc_traders: 'Ημερήσιοι traders (Wall Street)',
        uc_hr: 'HR onboarding',
        uc_hr_badge: 'B2B κλιμακούμενο',
        uc_cpa: 'Ελεγκτές & λογιστική',
        uc_creators: 'Δημιουργοί περιεχομένου',
        uc_engineers: 'Μηχανικοί λογισμικού',
        uc_realtors: 'Μεσίτες ακινήτων',
        guide_title: 'Οδηγός & επίλυση προβλημάτων',
        guide_01_h: 'Πώς να χρησιμοποιήσεις το Aeolo',
        guide_li1_html:
            'Πρόσθεσε URLs, <b class="text-slate-800">φακέλους</b>, <b class="text-slate-800">έγγραφα</b> (π.χ. <b class="text-slate-800">.xlsx</b> με πλήρη διαδρομή), <b class="text-slate-800">άλλες ρουτίνες</b> (άλλο <b class="text-slate-800">.bat</b> / <b class="text-slate-800">.cmd</b> σε Windows — τρέχει με τη σειρά· σε Mac άλλο <b class="text-slate-800">.sh</b> με <code class="inline rounded bg-slate-100 px-1 py-0.5 text-slate-700 font-mono text-[10px] align-baseline">bash</code>), ή <b class="text-slate-800">.exe / .app</b>. Τα βήματα είναι <b class="text-slate-800">αριθμημένα</b> (1 = πρώτο). <b class="text-slate-800">Σύρε τη λαβή</b> για αναδιάταξη.',
        guide_li2: 'Διάλεξε λειτουργικό σύστημα (Windows ή macOS).',
        guide_li3: 'Πάτα «Άφησε το script» και αποθήκευσε το αρχείο στην επιφάνεια εργασίας.',
        guide_li4: 'Διπλό κλικ στο αρχείο κάθε φορά που ξεκινάς τη μέρα σου!',
        guide_li5_html:
            'Για αλλαγές αργότερα, <b class="text-slate-800">Εισαγωγή ρουτίνας</b> με αποθηκευμένο <b class="text-slate-800">.bat</b> ή <b class="text-slate-800">.sh</b> από το Aeolo, ή <b class="text-slate-800">Αποθήκευση αντιγράφου JSON</b> για πλήρες στιγμιότυπο επανεισαγωγής.',
        guide_02_h: 'Ξεμπλοκάρισμα Windows',
        guide_02_p:
            'Τα Windows μπορεί να μπλοκάρουν scripts που κατέβηκαν από το internet. Αν δεν τρέχει το script σου:',
        guide_s1_h: 'Βήμα 1',
        guide_s1_p_html: 'Δεξί κλικ στο .bat σου και <b>Ιδιότητες</b>.',
        guide_s2_h: 'Βήμα 2',
        guide_s2_p_html:
            'Στην καρτέλα <b>Γενικά</b>, τσέκαρε το <b>«Ξεμπλοκάρισμα»</b> κάτω και πάτα Εφαρμογή.',
        safety_h: 'Ασφάλεια & ιδιωτικότητα',
        safety_client_h: '100% στον browser σου',
        safety_client_p_html:
            'Το Aeolo τρέχει εξ ολοκλήρου στον browser σου. URLs, διαδρομές και ονόματα εφαρμογών <b>δεν</b> φεύγουν από τον υπολογιστή σου. Χωρίς servers, χωρίς tracking, χωρίς βάση.',
        safety_audit_h: 'Έλεγξε τον κώδικα',
        safety_audit_p:
            'Η διαφάνεια είναι προτεραιότητα. Μπορείς να δεις τον πλήρη πηγαίο κώδικα στο GitHub για να επαληθεύσεις την ασφάλεια.',
        safety_github_btn: 'Δες στο GitHub',
        macos_box_h: 'Χρήστες macOS',
        macos_box_p_html:
            'Μετά τη λήψη του <b>.sh</b>, χρειάζονται δικαιώματα εκτέλεσης. Στο Terminal:<br><code class="block mt-3 p-3 bg-slate-50 rounded-lg text-indigo-600 font-mono">chmod +x your_script.sh</code>',
        footer_tagline: 'Aeolo.app • Σχεδιασμένο στην Κρήτη • Για επαγγελματίες',
        footer_paypal: 'Support στο PayPal'
    };

    let current = 'en';
    let captured = false;
    const snapText = new Map();
    const snapHtml = new Map();
    const snapTitle = new Map();
    let snapDocTitle = '';
    let snapMetaDesc = '';

    function t(key, vars) {
        let s;
        if (Object.prototype.hasOwnProperty.call(BOTH, key)) {
            const b = BOTH[key];
            s = current === 'el' ? b.el : b.en;
        } else if (current === 'el' && EL[key] != null) {
            s = EL[key];
        } else {
            s = snapText.get(key);
        }
        if (s == null) s = key;
        if (vars && typeof s === 'string') {
            Object.keys(vars).forEach((k) => {
                s = s.split('{{' + k + '}}').join(String(vars[k]));
            });
        }
        return s;
    }

    function captureFromDom() {
        if (captured) return;
        captured = true;
        snapDocTitle = document.title;
        const md = document.querySelector('meta[name="description"]');
        if (md) snapMetaDesc = md.getAttribute('content') || '';

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const k = el.getAttribute('data-i18n');
            if (k) snapText.set(k, el.textContent);
        });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const k = el.getAttribute('data-i18n-html');
            if (k) snapHtml.set(k, el.innerHTML);
        });
        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
            const k = el.getAttribute('data-i18n-title');
            if (k) snapTitle.set(k, el.getAttribute('title') || '');
        });
    }

    function applyLang(lang) {
        current = lang === 'el' ? 'el' : 'en';
        document.documentElement.lang = current === 'el' ? 'el' : 'en';

        document.title = current === 'el' ? DOC_TITLE_EL : snapDocTitle;
        const md = document.querySelector('meta[name="description"]');
        if (md) md.setAttribute('content', current === 'el' ? META_DESC_EL : snapMetaDesc);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const k = el.getAttribute('data-i18n');
            if (!k) return;
            if (current === 'el' && EL[k] != null) el.textContent = EL[k];
            else el.textContent = snapText.get(k) ?? '';
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const k = el.getAttribute('data-i18n-html');
            if (!k) return;
            if (current === 'el' && EL[k] != null) el.innerHTML = EL[k];
            else el.innerHTML = snapHtml.get(k) ?? '';
        });

        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
            const k = el.getAttribute('data-i18n-title');
            if (!k) return;
            if (current === 'el' && EL[k] != null) el.setAttribute('title', EL[k]);
            else el.setAttribute('title', snapTitle.get(k) || '');
        });

        document.querySelectorAll('.js-lang-toggle').forEach((btn) => {
            if (current === 'el') {
                btn.textContent = 'EN';
                btn.title = 'English version';
                btn.setAttribute('aria-label', 'English version');
            } else {
                btn.textContent = 'ΕΛ';
                btn.title = 'Ελληνική έκδοση';
                btn.setAttribute('aria-label', 'Ελληνική έκδοση');
            }
        });

        window.dispatchEvent(new CustomEvent('aeolo-lang', { detail: { lang: current } }));
    }

    function toggleLang() {
        applyLang(current === 'en' ? 'el' : 'en');
    }

    function bindLangButtons() {
        document.querySelectorAll('.js-lang-toggle').forEach((btn) => {
            btn.addEventListener('click', toggleLang);
        });
    }

    window.AeoloI18n = {
        captureFromDom,
        bindLangButtons,
        applyLang,
        toggleLang,
        t,
        getLang: () => current
    };
})();
