document.addEventListener('DOMContentLoaded', function () {

    /* ═══════════════════════════════════════
       Typing Effect
       ═══════════════════════════════════════ */
    function initTyping() {
        const el = document.getElementById('typing-text');
        if (!el) return;
        const titles = [
            "a Machine Learning Engineer",
            "a Deep Learning Enthusiast",
            "an aspiring Data Scientist"
        ];
        let idx = 0, charIdx = 0, deleting = false;

        function type() {
            const current = titles[idx];
            if (deleting) {
                el.textContent = current.substring(0, charIdx - 1);
                charIdx--;
            } else {
                el.textContent = current.substring(0, charIdx + 1);
                charIdx++;
            }

            let speed = 60;
            if (!deleting && charIdx === current.length) {
                deleting = true;
                speed = 1200;
            } else if (deleting && charIdx === 0) {
                deleting = false;
                idx = (idx + 1) % titles.length;
                speed = 300;
            }
            setTimeout(type, deleting && charIdx > 0 ? 30 : speed);
        }
        type();
    }

    /* ═══════════════════════════════════════
       Neural Network Canvas Particles
       ═══════════════════════════════════════ */
    function initNeuralParticles() {
        const canvas = document.getElementById('nn-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let w, h, particles = [], mouse = { x: null, y: null };
        const isMobile = window.innerWidth < 768;
        const COUNT = isMobile ? 20 : 50;
        const CONNECTION_DIST = isMobile ? 120 : 200;
        const MOUSE_ATTRACT = 350;
        const MOUSE_FORCE = 0.02;

        const colors = {
            dark: { node1: '#8b5cf6', node2: '#3b82f6', glow: '59, 130, 246', line: '139, 92, 246' },
            light: { node1: '#6366f1', node2: '#818cf8', glow: '99, 102, 241', line: '99, 102, 241' }
        };

        function getColors() {
            return document.body.classList.contains('light-mode') ? colors.light : colors.dark;
        }

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        class Node {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = (Math.random() - 0.5) * 0.6;
                this.r = Math.random() * 2.5 + 1.5;
                this.baseR = this.r;
                this.glow = 0;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > w) this.vx *= -1;
                if (this.y < 0 || this.y > h) this.vy *= -1;
                if (mouse.x !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MOUSE_ATTRACT) {
                        const force = (1 - dist / MOUSE_ATTRACT) * MOUSE_FORCE;
                        this.vx += dx * force * 0.01;
                        this.vy += dy * force * 0.01;
                        this.r = this.baseR + (1 - dist / MOUSE_ATTRACT) * 4;
                        this.glow = (1 - dist / MOUSE_ATTRACT);
                    } else {
                        this.r += (this.baseR - this.r) * 0.05;
                        this.glow *= 0.95;
                    }
                } else {
                    this.r += (this.baseR - this.r) * 0.05;
                    this.glow *= 0.95;
                }
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (speed > 2) {
                    this.vx = (this.vx / speed) * 2;
                    this.vy = (this.vy / speed) * 2;
                }
            }
            draw(c) {
                if (this.glow > 0.01) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.r * 3, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${c.glow}, ${this.glow * 0.12})`;
                    ctx.fill();
                }
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
                gradient.addColorStop(0, c.node1);
                gradient.addColorStop(1, c.node2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }

        for (let i = 0; i < COUNT; i++) particles.push(new Node());

        function drawConnections(c) {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < CONNECTION_DIST) {
                        const opacity = (1 - dist / CONNECTION_DIST) * 0.35;
                        const avgGlow = (particles[i].glow + particles[j].glow) / 2;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(${c.line}, ${opacity + avgGlow * 0.3})`;
                        ctx.lineWidth = 0.8 + avgGlow * 1.2;
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, w, h);
            const c = getColors();
            particles.forEach(p => { p.update(); p.draw(c); });
            drawConnections(c);
            requestAnimationFrame(animate);
        }

        canvas.addEventListener('mousemove', e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        canvas.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

        animate();
    }

    /* ═══════════════════════════════════════
       Scroll Reveal (IntersectionObserver)
       ═══════════════════════════════════════ */
    function initReveal() {
        const els = document.querySelectorAll('[data-reveal]');
        if (els.length === 0) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        els.forEach(el => observer.observe(el));
    }

    /* ═══════════════════════════════════════
       Theme Toggle
       ═══════════════════════════════════════ */
    function initThemeToggle() {
        const desktop = document.getElementById('theme-toggle');
        const mobile = document.getElementById('theme-toggle-mobile');
        const body = document.body;

        function setTheme(btn, isLight) {
            body.classList.toggle('light-mode', isLight);
            const icon = btn.querySelector('i');
            if (icon) {
                icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
            }
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        }

        function syncIcons(isLight) {
            document.querySelectorAll('.theme-btn i').forEach(i => {
                i.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
            });
        }

        function handleToggle(btn) {
            const isLight = !body.classList.contains('light-mode');
            setTheme(btn, isLight);
            syncIcons(isLight);
        }

        if (desktop) desktop.addEventListener('click', () => handleToggle(desktop));
        if (mobile) mobile.addEventListener('click', () => handleToggle(mobile));

        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            body.classList.add('light-mode');
            syncIcons(true);
        }
    }

    /* ═══════════════════════════════════════
       Mobile Menu
       ═══════════════════════════════════════ */
    function initMobileMenu() {
        const toggle = document.getElementById('mobile-menu');
        const menu = document.getElementById('primary-navigation');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !expanded);
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        menu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* ═══════════════════════════════════════
       Smooth Scroll
       ═══════════════════════════════════════ */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (!target) return;
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            });
        });
    }

    /* ═══════════════════════════════════════
       Scroll Tracking (Nav, Back-to-top)
       ═══════════════════════════════════════ */
    function initScrollTracking() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        const backToTop = document.getElementById('back-to-top');
        const navbar = document.querySelector('.navbar');
        if (sections.length === 0) return;

        let offsets = [];
        function cache() {
            offsets = Array.from(sections).map(s => ({
                id: s.id,
                top: s.offsetTop
            }));
        }
        cache();
        window.addEventListener('resize', cache);

        let ticking = false;
        function onScroll() {
            const y = window.pageYOffset;

            if (navbar) navbar.classList.toggle('scrolled', y > 50);
            if (backToTop) backToTop.classList.toggle('visible', y > 300);

            let current = '';
            for (let i = offsets.length - 1; i >= 0; i--) {
                if (y >= offsets[i].top - 200) {
                    current = offsets[i].id;
                    break;
                }
            }
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + current);
            });
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
        }, { passive: true });
        onScroll();
    }

    /* ═══════════════════════════════════════
       Back to Top Click
       ═══════════════════════════════════════ */
    function initBackToTop() {
        const btn = document.getElementById('back-to-top');
        if (btn) {
            btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        }
    }

    /* ═══════════════════════════════════════
       Footer Year
       ═══════════════════════════════════════ */
    function initYear() {
        const el = document.getElementById('current-year');
        if (el) el.textContent = new Date().getFullYear();
    }

    /* ═══════════════════════════════════════
       Dynamic Project Rendering
       ═══════════════════════════════════════ */
    function initProjects() {
        const grid = document.getElementById('projects-grid');
        if (!grid || typeof projectsData === 'undefined') return;

        function createCard(p) {
            const svgFallback = encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="340" height="200" viewBox="0 0 340 200">` +
                `<rect fill="#1e293b" width="340" height="200"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#3b82f6" font-size="16" font-family="Arial">${p.title}</text></svg>`
            );
            const icon = p.isLive ? 'fa-external-link-alt' : 'fab fa-github';
            const label = p.isLive ? 'Live Demo' : 'Source Code';

            return `
                <div class="project-item ${p.category}" role="listitem"
                     data-title="${p.title}"
                     data-desc="${p.desc}"
                     data-img="${p.img}"
                     data-link="${p.link}"
                     data-tags="${p.tags.join(', ')}">
                    <div class="project-img-wrap">
                        <img src="${p.img}" alt="${p.title}" class="project-img" loading="lazy" decoding="async"
                             onerror="this.src='data:image/svg+xml,${svgFallback}'">
                        <div class="project-overlay"><span>View Details</span></div>
                    </div>
                    <div class="project-content">
                        <h3>${p.title}</h3>
                        <p>${p.desc}</p>
                        <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
                        <div class="project-links">
                            <a href="${p.link}" class="project-link" target="_blank" rel="noopener" onclick="event.stopPropagation()">
                                <i class="${icon}" aria-hidden="true"></i> ${label}
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }

        grid.innerHTML = projectsData.map(createCard).join('');
    }

    /* ═══════════════════════════════════════
       Project Filter
       ═══════════════════════════════════════ */
    function initProjectFilter() {
        const btns = document.querySelectorAll('.filter-btn');
        if (btns.length === 0) return;

        btns.forEach(btn => {
            btn.addEventListener('click', function () {
                btns.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');

                const filter = this.getAttribute('data-filter');
                document.querySelectorAll('.project-item').forEach(item => {
                    const match = filter === 'all' || item.classList.contains(filter);
                    item.classList.toggle('hidden', !match);
                    item.setAttribute('tabindex', match ? '0' : '-1');
                });
            });
        });
    }

    /* ═══════════════════════════════════════
       Project Modal
       ═══════════════════════════════════════ */
    function initProjectModal() {
        const modal = document.getElementById('project-modal');
        if (!modal) return;
        const overlay = modal.querySelector('.modal-overlay');
        const closeBtn = modal.querySelector('.modal-close');
        const img = document.getElementById('modal-img');
        const title = modal.querySelector('.modal-title');
        const desc = modal.querySelector('.modal-desc');
        const tags = modal.querySelector('.modal-tags');
        const link = modal.querySelector('.modal-link');
        const linkIcon = modal.querySelector('.modal-link i');
        const linkText = modal.querySelector('.modal-link span');
        let lastFocused = null;

        function trapFocus(e) {
            const focusable = modal.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }

        function open(card) {
            lastFocused = document.activeElement;
            const isLive = card.querySelector('.project-link i').classList.contains('fa-external-link-alt');
            img.src = card.dataset.img;
            img.alt = card.dataset.title;
            title.textContent = card.dataset.title;
            desc.textContent = card.dataset.desc;
            tags.innerHTML = card.dataset.tags.split(',').map(t => `<span class="project-tag">${t.trim()}</span>`).join('');
            link.href = card.dataset.link;
            linkIcon.className = isLive ? 'fas fa-external-link-alt' : 'fab fa-github';
            linkText.textContent = isLive ? 'View Live Demo' : 'View Source Code';
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            closeBtn.focus();
            document.addEventListener('keydown', trapFocus);
        }

        function close() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            document.removeEventListener('keydown', trapFocus);
            if (lastFocused) lastFocused.focus();
        }

        document.querySelectorAll('.project-item').forEach(card => {
            card.addEventListener('click', function (e) {
                if (e.target.closest('.project-link')) return;
                if (this.classList.contains('hidden')) return;
                open(this);
            });
        });

        closeBtn.addEventListener('click', close);
        overlay.addEventListener('click', close);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) close();
        });
    }

    /* ═══════════════════════════════════════
       Count-Up Animation
       ═══════════════════════════════════════ */
    function initCountUp() {
        const stats = document.querySelectorAll('.stat-number[data-count]');
        if (stats.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    let current = 0;
                    const step = Math.ceil(target / 40);
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = current + (target >= 10 ? '+' : '+');
                    }, 30);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(s => observer.observe(s));
    }

    /* ═══════════════════════════════════════
       Music Player
       ═══════════════════════════════════════ */
    function initMusicPlayer() {
        const btn = document.getElementById('music-toggle');
        const player = document.getElementById('music-player');
        if (!btn || !player) return;
        let playing = false;

        btn.addEventListener('click', function () {
            playing = !playing;
            if (playing) {
                player.play().catch(() => { playing = false; });
                btn.classList.add('playing');
                btn.innerHTML = '<i class="fas fa-pause" aria-hidden="true"></i>';
                btn.setAttribute('aria-label', 'Pause relaxing music');
            } else {
                player.pause();
                btn.classList.remove('playing');
                btn.innerHTML = '<i class="fas fa-music" aria-hidden="true"></i>';
                btn.setAttribute('aria-label', 'Play relaxing music');
            }
        });
    }

    /* ═══════════════════════════════════════
       Contact Form
       ═══════════════════════════════════════ */
    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const fields = {
            name: form.querySelector('#form-name'),
            email: form.querySelector('#form-email'),
            message: form.querySelector('#form-message')
        };
        const submitBtn = form.querySelector('.form-submit');
        const success = form.querySelector('.form-success');

        function showError(field, msg) {
            field.classList.add('error');
            const err = field.parentElement.querySelector('.form-error');
            if (err) err.textContent = msg;
        }

        function clearError(field) {
            field.classList.remove('error');
            const err = field.parentElement.querySelector('.form-error');
            if (err) err.textContent = '';
        }

        function validate() {
            let valid = true;
            if (!fields.name.value.trim()) {
                showError(fields.name, 'Name is required');
                valid = false;
            } else clearError(fields.name);

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!fields.email.value.trim()) {
                showError(fields.email, 'Email is required');
                valid = false;
            } else if (!emailRegex.test(fields.email.value)) {
                showError(fields.email, 'Please enter a valid email');
                valid = false;
            } else clearError(fields.email);

            if (!fields.message.value.trim()) {
                showError(fields.message, 'Message is required');
                valid = false;
            } else clearError(fields.message);

            return valid;
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!validate()) return;

            const name = encodeURIComponent(fields.name.value.trim());
            const email = encodeURIComponent(fields.email.value.trim());
            const message = encodeURIComponent(fields.message.value.trim());
            const subject = encodeURIComponent('Portfolio Contact from ' + fields.name.value.trim());

            const mailto = `mailto:siumahameed2003@gmail.com?subject=${subject}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

            window.location.href = mailto;
            form.reset();
            Object.values(fields).forEach(clearError);
        });

        // Clear errors on input
        Object.values(fields).forEach(f => {
            f.addEventListener('input', () => clearError(f));
        });
    }

    /* ═══════════════════════════════════════
       PDF Preview Modal
       ═══════════════════════════════════════ */
    function initPdfPreview() {
        const btn = document.getElementById('preview-cv-btn');
        const modal = document.getElementById('pdf-modal');
        if (!btn || !modal) return;
        const overlay = modal.querySelector('.modal-overlay');
        const closeBtn = modal.querySelector('.modal-close');

        function open() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            closeBtn.focus();
        }

        function close() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            btn.focus();
        }

        btn.addEventListener('click', open);
        closeBtn.addEventListener('click', close);
        overlay.addEventListener('click', close);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) close();
        });
    }

    /* ═══════════════════════════════════════
       Terminal Typing Effect
       ═══════════════════════════════════════ */
    function initTerminalTyping() {
        const el = document.getElementById('terminal-typed');
        if (!el) return;
        const lines = [
            "model = RandomForestClassifier(n_estimators=100)",
            "model.fit(X_train, y_train)",
            "y_pred = model.predict(X_test)",
            "acc = accuracy_score(y_test, y_pred)",
            "print(f\"Accuracy: {acc:.2%}\")",
            "# Result: 94.5% accuracy!"
        ];
        let lineIdx = 0, charIdx = 0;
        let deleting = false;

        function type() {
            const current = lines[lineIdx];
            if (deleting) {
                el.textContent = current.substring(0, charIdx - 1);
                charIdx--;
            } else {
                el.textContent = current.substring(0, charIdx + 1);
                charIdx++;
            }

            let speed = 80;
            if (!deleting && charIdx === current.length) {
                deleting = true;
                speed = 2000;
            } else if (deleting && charIdx === 0) {
                deleting = false;
                lineIdx = (lineIdx + 1) % lines.length;
                speed = 600;
            }
            setTimeout(type, deleting && charIdx > 0 ? 40 : speed);
        }
        type();
    }

    /* ═══════════════════════════════════════
       Radar Chart
       ═══════════════════════════════════════ */
    function initRadarChart() {
        const canvas = document.getElementById('radar-chart');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const skills = [
            { label: 'Python', value: 90 },
            { label: 'ML', value: 85 },
            { label: 'Deep Learning', value: 60 },
            { label: 'Data Analysis', value: 88 },
            { label: 'Statistics', value: 82 },
            { label: 'SQL', value: 75 }
        ];
        const n = skills.length;
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const radius = Math.min(cx, cy) - 30;
        let animProgress = 0;
        let animating = false;

        function getColor(isLight) {
            return isLight
                ? { grid: 'rgba(59, 130, 246, 0.12)', text: '#334155', fill: 'rgba(99, 102, 241, 0.2)', stroke: '#6366f1', dot: '#4f46e5', glow: 'rgba(99, 102, 241, 0.3)', labelFill: '#6366f1' }
                : { grid: 'rgba(99, 102, 241, 0.15)', text: '#cbd5e1', fill: 'rgba(129, 140, 248, 0.15)', stroke: '#818cf8', dot: '#a78bfa', glow: 'rgba(129, 140, 248, 0.25)', labelFill: '#a78bfa' };
        }

        function draw(progress) {
            const w = canvas.width, h = canvas.height;
            ctx.clearRect(0, 0, w, h);
            const c = getColor(document.body.classList.contains('light-mode'));
            const angleStep = (Math.PI * 2) / n;

            // Subtle rotation for visual interest
            const rotation = progress * 0.08;
            const startAngle = -Math.PI / 2 + rotation;

            // Grid rings with gradient
            for (let ring = 1; ring <= 5; ring++) {
                const r = (radius / 5) * ring;
                ctx.beginPath();
                for (let i = 0; i <= n; i++) {
                    const angle = startAngle + i * angleStep;
                    const x = cx + r * Math.cos(angle);
                    const y = cy + r * Math.sin(angle);
                    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.strokeStyle = c.grid;
                ctx.lineWidth = ring === 5 ? 1 : 0.5;
                ctx.stroke();
            }

            // Axis lines
            for (let i = 0; i < n; i++) {
                const angle = startAngle + i * angleStep;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
                ctx.strokeStyle = c.grid;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            // Data polygon with glow
            const dataRadius = radius * progress;
            ctx.save();
            ctx.shadowColor = c.glow;
            ctx.shadowBlur = 20 * progress;
            ctx.beginPath();
            for (let i = 0; i <= n; i++) {
                const idx = i % n;
                const angle = startAngle + idx * angleStep;
                const val = (skills[idx].value / 100) * dataRadius;
                const x = cx + val * Math.cos(angle);
                const y = cy + val * Math.sin(angle);
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fillStyle = c.fill;
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.strokeStyle = c.stroke;
            ctx.lineWidth = 2.5;
            ctx.stroke();
            ctx.restore();

            // Data dots with rings
            for (let i = 0; i < n; i++) {
                const angle = startAngle + i * angleStep;
                const val = (skills[i].value / 100) * dataRadius;
                const x = cx + val * Math.cos(angle);
                const y = cy + val * Math.sin(angle);

                // Outer ring
                ctx.beginPath();
                ctx.arc(x, y, 7, 0, Math.PI * 2);
                ctx.fillStyle = c.dot;
                ctx.globalAlpha = 0.2;
                ctx.fill();
                ctx.globalAlpha = 1;

                // Inner dot
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, Math.PI * 2);
                ctx.fillStyle = c.dot;
                ctx.fill();
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Value label near dot
                if (progress > 0.5) {
                    const labelAngle = angle;
                    const labelR = val + 16;
                    const lx = cx + labelR * Math.cos(labelAngle);
                    const ly = cy + labelR * Math.sin(labelAngle);
                    ctx.font = 'bold 10px Poppins, sans-serif';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillStyle = c.labelFill;
                    ctx.globalAlpha = Math.min(1, (progress - 0.5) * 4);
                    ctx.fillText(skills[i].value + '%', lx, ly);
                    ctx.globalAlpha = 1;
                }
            }

            // Labels with better styling
            for (let i = 0; i < n; i++) {
                const angle = startAngle + i * angleStep;
                const lx = cx + (radius + 26) * Math.cos(angle);
                const ly = cy + (radius + 26) * Math.sin(angle);
                ctx.font = '600 11px Poppins, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = c.text;

                // Offset labels near bottom to not overlap
                let offX = 0, offY = 0;
                if (skills[i].label === 'Statistics') offY = 4;
                if (skills[i].label === 'Data Analysis') offX = 0;
                if (skills[i].label === 'SQL') offY = 4;
                ctx.fillText(skills[i].label, lx + offX, ly + offY);
            }
        }

        // Animate on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animating) {
                    animating = true;
                    animProgress = 0;
                    function animate() {
                        animProgress += 0.03;
                        if (animProgress > 1) animProgress = 1;
                        draw(animProgress);
                        if (animProgress < 1) requestAnimationFrame(animate);
                        else animating = false;
                    }
                    animate();
                    observer.unobserve(canvas);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(canvas);

        // Redraw on theme change
        const themeObserver = new MutationObserver(() => {
            if (animProgress >= 1) draw(1);
        });
        themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        // Initial draw
        draw(0);

        // Handle resize
        window.addEventListener('resize', () => { if (animProgress >= 1) draw(1); });
    }

    /* ═══════════════════════════════════════
       Init Everything
       ═══════════════════════════════════════ */
    initTyping();
    initNeuralParticles();
    initReveal();
    initThemeToggle();
    initMobileMenu();
    initSmoothScroll();
    initScrollTracking();
    initBackToTop();
    initYear();
    initProjects();
    initProjectFilter();
    initProjectModal();
    initCountUp();
    initMusicPlayer();
    initContactForm();
    initPdfPreview();
    initTerminalTyping();
    initRadarChart();

});
