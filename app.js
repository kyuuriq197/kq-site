(function () {
    const CFG = window.PROFILE_CONFIG || {};
    const $ = (id) => document.getElementById(id);

    // Icons map
    const ICONS = {
        github: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>',
        telegram: '<svg viewBox="0 0 24 24" focusable="false"><path d="M21.94 4.4l-3.06 14.44c-.23 1.02-.84 1.27-1.7.79l-4.7-3.46-2.27 2.18c-.25.25-.46.46-.94.46l.34-4.77 8.68-7.84c.38-.34-.08-.53-.58-.19L6.99 13.2 2.35 11.75c-1.01-.32-1.03-1.01.21-1.5L20.6 2.94c.84-.31 1.58.2 1.34 1.46z"/></svg>',
        steam: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85.004 1.71.115 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>',
        youtube: '<svg viewBox="0 0 24 24" focusable="false"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>',
        tiktok: '<svg viewBox="0 0 24 24" focusable="false"><path d="M19.6 6.4a6.2 6.2 0 0 1-3.6-2V3h-3.2v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .6 0 .9.1V9.6a5.8 5.8 0 0 0-.9-.1 5.9 5.9 0 1 0 5.9 5.9V8.2a9.4 9.4 0 0 0 3.5.7V5.7a6.2 6.2 0 0 1-.1.7z"/></svg>',
        music: '<span class="social-emoji">🎵</span>',
        default: '<span class="social-emoji">🔗</span>'
    };

    // Apply basic profile data
    document.title = (CFG.username || 'profile') + ' - профиль';
    const nameEl = $('name');
    if (nameEl) nameEl.textContent = CFG.username || '';
    const handleEl = $('handle');
    if (handleEl) handleEl.textContent = CFG.handle || '';
    const bioEl = $('bio');
    if (bioEl) bioEl.textContent = CFG.bio || '';
    const uidEl = $('uid');
    if (uidEl) uidEl.textContent = CFG.uid || CFG.username || '';
    const avatarEl = $('avatar');
    if (avatarEl) avatarEl.src = CFG.avatar || 'avatar.png';
    const statusEl = $('status');
    if (statusEl) statusEl.title = CFG.status || 'online';
    const footerName = $('footerName');
    if (footerName) footerName.textContent = CFG.username || '';

    // Theme
    if (CFG.theme) {
        if (CFG.theme.accent) document.documentElement.style.setProperty('--accent', CFG.theme.accent);
        if (CFG.theme.socialColor) document.documentElement.style.setProperty('--social-color', CFG.theme.socialColor);
    }

    // Background
    if (CFG.background) {
        document.documentElement.style.setProperty('--bg-image', 'url("' + CFG.background + '")');
    }

    // Profile views
    const viewsEl = $('views');
    let views = CFG.profileViews;
    if (views === null || views === undefined) {
        try {
            const key = 'profile_views_' + (CFG.username || 'default');
            views = parseInt(localStorage.getItem(key) || '0', 10);
            views += 1;
            localStorage.setItem(key, String(views));
        } catch (e) {
            views = 1;
        }
    }
    if (viewsEl) viewsEl.textContent = views + ' просмотров';

    // Social links
    const socialsEl = $('socials');
    if (socialsEl && Array.isArray(CFG.socialLinks)) {
        CFG.socialLinks.forEach((link) => {
            if (!link || link.enabled === false || !link.url) return;
            const a = document.createElement('a');
            a.className = 'social';
            a.href = link.url;
            a.target = '_blank';
            a.rel = 'noopener';
            a.setAttribute('aria-label', link.label || link.id || 'link');
            a.title = link.label || '';
            const icon = ICONS[link.id] || ICONS.default;
            a.innerHTML = icon;
            socialsEl.appendChild(a);
        });
    }

    // Discord/Telegram copy buttons (if enabled)
    if (CFG.discord && CFG.discord.copy && CFG.discord.username) {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.type = 'button';
        btn.textContent = 'Discord: ' + CFG.discord.username;
        btn.addEventListener('click', () => copyText(CFG.discord.username, 'Discord ник скопирован'));
        socialsEl && socialsEl.appendChild(btn);
    }
    if (CFG.telegram && CFG.telegram.copy && CFG.telegram.username) {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.type = 'button';
        btn.textContent = 'TG: ' + CFG.telegram.username;
        btn.addEventListener('click', () => copyText(CFG.telegram.username, 'Telegram ник скопирован'));
        socialsEl && socialsEl.appendChild(btn);
    }

    // Toast
    const toastEl = $('toast');
    function showToast(msg) {
        if (!toastEl) return;
        toastEl.textContent = msg;
        toastEl.classList.add('show');
        clearTimeout(toastEl._t);
        toastEl._t = setTimeout(() => toastEl.classList.remove('show'), 1800);
    }
    function copyText(text, msg) {
        try {
            navigator.clipboard.writeText(text).then(() => showToast(msg || 'Скопировано'));
        } catch (e) {
            showToast('Не удалось скопировать');
        }
    }

    // Music
    const musicBlock = $('musicBlock');
    if (musicBlock && CFG.music && CFG.music.enabled) {
        const audio = document.createElement('audio');
        audio.id = 'audio';
        audio.src = CFG.music.src || '';
        audio.preload = 'none';

        const player = document.createElement('div');
        player.className = 'player';

        const playBtn = document.createElement('button');
        playBtn.className = 'player-btn';
        playBtn.id = 'musicBtn';
        playBtn.type = 'button';
        playBtn.setAttribute('aria-pressed', 'false');
        playBtn.setAttribute('aria-label', 'Воспроизвести');
        const icon = document.createElement('span');
        icon.id = 'musicIcon';
        icon.textContent = '\u25B6';
        playBtn.appendChild(icon);

        const info = document.createElement('div');
        info.className = 'player-info';
        const title = document.createElement('div');
        title.className = 'player-title';
        title.textContent = CFG.music.title || 'music';
        const bar = document.createElement('div');
        bar.className = 'player-bar';
        const seek = document.createElement('input');
        seek.type = 'range';
        seek.id = 'seek';
        seek.min = '0';
        seek.max = '100';
        seek.value = '0';
        seek.step = '0.1';
        seek.setAttribute('aria-label', 'Прогресс');
        bar.appendChild(seek);
        const time = document.createElement('div');
        time.className = 'player-time';
        const cur = document.createElement('span');
        cur.id = 'cur';
        cur.textContent = '0:00';
        const dur = document.createElement('span');
        dur.id = 'dur';
        dur.textContent = '0:00';
        time.appendChild(cur);
        time.appendChild(dur);

        info.appendChild(title);
        info.appendChild(bar);
        info.appendChild(time);

        player.appendChild(playBtn);
        player.appendChild(info);

        musicBlock.appendChild(audio);
        musicBlock.appendChild(player);

        // wire player
        function fmt(t) {
            if (!isFinite(t)) return '0:00';
            const m = Math.floor(t / 60);
            const sec = Math.floor(t % 60);
            return m + ':' + (sec < 10 ? '0' : '') + sec;
        }
        playBtn.addEventListener('click', async () => {
            try {
                if (audio.paused) {
                    await audio.play();
                    playBtn.classList.add('playing');
                    playBtn.setAttribute('aria-pressed', 'true');
                    icon.textContent = '\u275A\u275A';
                } else {
                    audio.pause();
                    playBtn.classList.remove('playing');
                    playBtn.setAttribute('aria-pressed', 'false');
                    icon.textContent = '\u25B6';
                }
            } catch (e) {
                icon.textContent = '!';
            }
        });
        audio.addEventListener('loadedmetadata', () => {
            dur.textContent = fmt(audio.duration);
        });
        audio.addEventListener('timeupdate', () => {
            cur.textContent = fmt(audio.currentTime);
            if (audio.duration) seek.value = (audio.currentTime / audio.duration) * 100;
        });
        audio.addEventListener('ended', () => {
            playBtn.classList.remove('playing');
            playBtn.setAttribute('aria-pressed', 'false');
            icon.textContent = '\u25B6';
            seek.value = 0;
        });
        seek.addEventListener('input', () => {
            if (audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
        });
    }

    // Snowflakes
    const snowContainer = $('snow');
    if (snowContainer && CFG.snowflakes !== false) {
        const COUNT = window.matchMedia('(max-width: 640px)').matches ? 24 : 44;
        for (let i = 0; i < COUNT; i++) {
            const flake = document.createElement('span');
            flake.className = 'flake';
            flake.textContent = '❅';
            flake.style.left = (Math.random() * 100) + 'vw';
            flake.style.animationDuration = (6 + Math.random() * 8) + 's';
            flake.style.animationDelay = (-Math.random() * 12) + 's';
            flake.style.fontSize = (10 + Math.random() * 14) + 'px';
            flake.style.opacity = (0.35 + Math.random() * 0.45).toFixed(2);
            snowContainer.appendChild(flake);
        }
    }

    // Click to enter
    const enter = $('enter');
    const enterBtn = $('enterBtn');
    const audioEl = $('audio');
    if (enter && enterBtn) {
        enterBtn.addEventListener('click', async () => {
            enter.classList.add('hidden');
            if (audioEl) {
                try { await audioEl.play(); } catch (e) {}
                const mb = $('musicBtn');
                const mi = $('musicIcon');
                if (mb) { mb.classList.add('playing'); mb.setAttribute('aria-pressed', 'true'); }
                if (mi) mi.textContent = '\u275A\u275A';
            }
        });
    }

    // Background image via CSS variable
    if (CFG.background) {
        const bgEl = document.querySelector('.bg');
        if (bgEl) bgEl.style.backgroundImage = 'url("' + CFG.background + '")';
    }
})();
