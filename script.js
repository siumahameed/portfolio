document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initTyping();
    initThemeToggle();
    initMobileMenu();
    initAOS();
    initBackToTop();
    initYear();
    initSmoothScroll();
    initProjectsData();
    initProjectsFilter();
    initMusicPlayer();
});

function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#3498db'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#3498db',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
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
            duration: 600,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic',
            disable: function() {
                return window.innerWidth < 768;
            }
        });
    }
}

function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const progressBar = this.querySelector('.progress-bar');
        const width = progressBar.style.width;
        progressBar.style.width = '0';
        setTimeout(() => {
            progressBar.style.width = width;
        }, 100);
    });
});

function initProjectsFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const projectItems = document.querySelectorAll('.project-item');
            
            projectItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('show'), 50);
                } else if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('show'), 50);
                } else {
                    item.style.display = 'none';
                    item.classList.remove('show');
                }
            });
        });
    });
}

function initProjectsData() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    const projects = [
        {
            id: 1,
            title: "Rock and Mine Prediction for Sonar",
            description: "Predicting whether an object is a mine or rock under the sea using Logistic Regression analyzing sonar radar data.",
            image: "image/Rock and Mine Prediction for Sonar.jpg",
            category: "ml",
            tags: ['Python', 'Scikit-learn', 'Logistic Regression', 'Classification'],
            codeLink: "https://github.com/siumahameed/ml_projects/tree/main/submarine_sonar_project"
        },
        {
            id: 2,
            title: "Spam SMS Detection",
            description: "NLP project to detect spam messages using text classification and machine learning.",
            image: "image/Spam SMS Detection.jpg",
            category: "ml",
            tags: ['Python', 'NLP', 'Text Classification', 'Scikit-learn'],
            codeLink: "https://github.com/siumahameed/ml_projects/tree/main/spam_sms_detection"
        },
        {
            id: 3,
            title: "Ad Click Prediction",
            description: "Predicting user ad clicks using machine learning classification models for better targeting.",
            image: "image/Ad Click Prediction.jpg",
            category: "ml",
            tags: ['Python', 'Scikit-learn', 'ML', 'Classification'],
            codeLink: "https://github.com/siumahameed/ml_projects/tree/main/Ad_click_project"
        },
        {
            id: 4,
            title: "Energy Consumption Prediction",
            description: "Forecasting energy consumption using regression models for better resource planning.",
            image: "image/Energy Consumption Prediction.jpg",
            category: "ml",
            tags: ['Python', 'ML', 'Regression', 'Data Analysis'],
            codeLink: "https://github.com/siumahameed/ml_projects/tree/main/Energy%20Consumption%20Project"
        },
        {
            id: 5,
            title: "Loan Prediction",
            description: "Predicting loan approval status based on applicant details using classification algorithms.",
            image: "image/Loan Prediction.jpg",
            category: "ml",
            tags: ['Python', 'Scikit-learn', 'Classification', 'Finance'],
            codeLink: "https://github.com/siumahameed/ml_projects/tree/main/Loand%20Prediction"
        },
        {
            id: 6,
            title: "Heart Disease Prediction",
            description: "Predicting heart disease risk using classification algorithms on patient medical data.",
            image: "image/Heart Disease Prediction.jpg",
            category: "ml",
            tags: ['Python', 'ML', 'Healthcare', 'Classification'],
            codeLink: "https://github.com/siumahameed/ml_projects/tree/main/heart_disease_prediction"
        },
        {
            id: 7,
            title: "BD Cricket Analysis",
            description: "Exploratory data analysis of Bangladesh cricket statistics and performance metrics.",
            image: "image/BD Cricket Analysis.jpg",
            category: "eda",
            tags: ['Python', 'Pandas', 'Data Visualization', 'EDA'],
            codeLink: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/BD%20Cricket%20Analysis"
        },
        {
            id: 8,
            title: "BD Road Accident Analysis",
            description: "Analyzing road accident patterns in Bangladesh to identify key causes and safety recommendations.",
            image: "image/BD Road Accident Analysis.jpg",
            category: "eda",
            tags: ['Python', 'Pandas', 'Matplotlib', 'EDA'],
            codeLink: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/BD%20Road%20Accident%20Analysis"
        },
        {
            id: 9,
            title: "BD Temperature & Rain Analysis",
            description: "Analyzing temperature and rainfall patterns in Bangladesh for climate insights.",
            image: "image/BD Temperature & Rain analysis.jpg",
            category: "eda",
            tags: ['Python', 'Pandas', 'Seaborn', 'EDA'],
            codeLink: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/BD%20temp%20and%20rain%20analysis"
        },
        {
            id: 10,
            title: "Diwali Sales Analysis",
            description: "Analyzing Diwali festival sales data to uncover consumer trends and purchasing patterns.",
            image: "image/Diwali Sales Analysis.jpg",
            category: "eda",
            tags: ['Python', 'Pandas', 'Data Analysis', 'EDA'],
            codeLink: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/Dewali%20sales%20analysis"
        },
        {
            id: 11,
            title: "IPL Data Analysis",
            description: "Comprehensive analysis of Indian Premier League cricket data to extract team and player insights.",
            image: "image/IPL Data Analysis.jpg",
            category: "eda",
            tags: ['Python', 'Pandas', 'Visualization', 'EDA'],
            codeLink: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/IPL%20Data%20Analysis"
        },
        {
            id: 12,
            title: "Shop Data Analysis",
            description: "Analyzing US retail shop data to understand sales patterns and customer behavior.",
            image: "image/Shop Data Analysis.jpg",
            category: "eda",
            tags: ['Python', 'Pandas', 'Tableau', 'EDA'],
            codeLink: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/Us%20shop%20data%20analysis"
        },
        {
            id: 13,
            title: "Lego Data Analysis",
            description: "Exploratory analysis of Lego product datasets to explore sets, themes, and trends.",
            image: "image/Lego Data Analysis.jpg",
            category: "eda",
            tags: ['Python', 'Pandas', 'Data Visualization', 'EDA'],
            codeLink: "https://github.com/siumahameed/Eda-projects-basic-/tree/main/lego%20analysis"
        }
    ];
    
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = `project-item ${project.category}`;
        projectItem.setAttribute('data-aos', 'fade-up');
        projectItem.setAttribute('data-aos-delay', (project.id * 100).toString());
        
        projectItem.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img" loading="lazy" decoding="async">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.codeLink}" class="project-link" target="_blank" rel="noopener">
                        <i class="fab fa-github"></i> Source Code
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectItem);
    });
}

function initMusicToggle() {
    const musicBtn = document.getElementById('music-toggle');
    const musicContainer = document.getElementById('music-container');
    let isPlaying = false;
    let playerElement = null;

    if (musicBtn && musicContainer) {
        musicBtn.addEventListener('click', function() {
            isPlaying = !isPlaying;
            
            if (isPlaying) {
                if (!playerElement) {
                    playerElement = document.createElement('iframe');
                    playerElement.setAttribute('width', '0');
                    playerElement.setAttribute('height', '0');
                    playerElement.setAttribute('frameborder', '0');
                    playerElement.setAttribute('allow', 'autoplay; encrypted-media');
                    playerElement.setAttribute('src', 'https://www.youtube.com/embed/Y5jsW8Jjm_c?autoplay=1&loop=1&playlist=Y5jsW8Jjm_c&rel=0');
                    musicContainer.appendChild(playerElement);
                }
                musicBtn.classList.add('playing');
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                if (playerElement) {
                    playerElement.setAttribute('src', '');
                }
                musicBtn.classList.remove('playing');
                musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            }
        });
    }
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