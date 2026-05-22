document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initTyping();
    initThemeToggle();
    initMobileMenu();
    initAOS();
    initBackToTop();
    initYear();
    initSmoothScroll();
    initProjectsFilter();
    initMusicPlayer();
    initProjectModal();
});

function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 30, density: { enable: true, value_area: 800 } },
                color: { value: '#3498db' },
                shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
                opacity: { value: 0.4, random: false, anim: { enable: false } },
                size: { value: 2, random: true, anim: { enable: false } },
                line_linked: { enable: true, distance: 150, color: '#3498db', opacity: 0.3, width: 1 },
                move: { enable: true, speed: 1.5, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: false }, onclick: { enable: false }, resize: true }
            },
            retina_detect: false
        });
    }

    // Pause particles when hero is not visible
    const hero = document.getElementById('home');
    const canvas = document.querySelector('#particles-js canvas');
    if (hero && canvas) {
        const observer = new IntersectionObserver(entries => {
            canvas.style.visibility = entries[0].isIntersecting ? 'visible' : 'hidden';
        }, { threshold: 0 });
        observer.observe(hero);
    }
}

function initTyping() {
    const typingElement = document.getElementById('typing-text');
    const titles = [
        "a Machine Learning Engineer",
        "a Deep Learning Enthusiast",
        "an aspiring Data Scientist"
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('theme-toggle-mobile');
    const body = document.body;

    function toggleTheme(btn) {
        body.classList.toggle('light-mode');
        const icon = btn.querySelector('i');

        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }

        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            toggleTheme(themeToggle);
            const mobileIcon = mobileThemeToggle ? mobileThemeToggle.querySelector('i') : null;
            if (mobileIcon) {
                mobileIcon.className = themeToggle.querySelector('i').className;
            }
        });
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', function() {
            toggleTheme(mobileThemeToggle);
            const desktopIcon = themeToggle ? themeToggle.querySelector('i') : null;
            if (desktopIcon) {
                desktopIcon.className = mobileThemeToggle.querySelector('i').className;
            }
        });
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeToggle) themeToggle.querySelector('i').className = 'fas fa-sun';
        if (mobileThemeToggle) mobileThemeToggle.querySelector('i').className = 'fas fa-sun';
    }
}

function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('primary-navigation');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        menuToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 300,
            once: true,
            offset: 60,
            easing: 'ease-out',
            disable: false
        });
    }
}

function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Single throttled scroll handler for nav highlighting + back-to-top
(function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('back-to-top');
    const navbar = document.querySelector('.navbar');
    let ticking = false;

    // Pre-compute section offsets (recalculate on resize)
    let sectionData = [];
    function cacheSectionOffsets() {
        sectionData = Array.from(sections).map(s => ({
            id: s.getAttribute('id'),
            top: s.offsetTop
        }));
    }
    cacheSectionOffsets();
    window.addEventListener('resize', cacheSectionOffsets);

    function onScroll() {
        const scrollY = window.pageYOffset;

        // Navbar scrolled state
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 50);
        }

        // Back to top
        if (backToTop) {
            backToTop.classList.toggle('visible', scrollY > 300);
        }

        // Active nav link
        let current = '';
        for (let i = sectionData.length - 1; i >= 0; i--) {
            if (scrollY >= sectionData[i].top - 150) {
                current = sectionData[i].id;
                break;
            }
        }
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });

        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });

    // Run once on load
    onScroll();
})();

function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            const projectItems = document.querySelectorAll('.project-item');

            projectItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function initMusicPlayer() {
    const musicBtn = document.getElementById('music-toggle');
    const audioPlayer = document.getElementById('music-player');
    let isPlaying = false;

    if (musicBtn && audioPlayer) {
        musicBtn.addEventListener('click', function(e) {
            e.preventDefault();
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                audioPlayer.play().catch(err => console.log('Play error:', err));
                musicBtn.classList.add('playing');
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audioPlayer.pause();
                musicBtn.classList.remove('playing');
                musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            }
        });
    }
}

function initProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const overlay = modal.querySelector('.modal-overlay');
    const closeBtn = modal.querySelector('.modal-close');
    const modalImg = modal.querySelector('.modal-img');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDesc = modal.querySelector('.modal-desc');
    const modalTags = modal.querySelector('.modal-tags');
    const modalLink = modal.querySelector('.modal-link');

    function openModal(card) {
        modalImg.src = card.dataset.img;
        modalImg.alt = card.dataset.title;
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modalLink.href = card.dataset.link;
        modalTags.innerHTML = card.dataset.tags.split(',').map(t => `<span class="project-tag">${t.trim()}</span>`).join('');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.project-item').forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e) {
            if (e.target.closest('.project-link')) return;
            openModal(this);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
}