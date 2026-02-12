// Extracted JS from portfolio.html

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// CV Download Functionality
const cvDownload = document.getElementById('cvDownload');
if (cvDownload) {
    cvDownload.addEventListener('click', (e) => {
        e.preventDefault();
        // Get current language and download corresponding CV
        const currentLanguage = localStorage.getItem('language') || 'es';
        const cvUrl = currentLanguage === 'es' ? 'assets/CV Lucia Viazzo .pdf' : 'assets/CV Lucia Viazzo - English.pdf';
        const fileName = currentLanguage === 'es' ? 'CV_Lucia_Viazzo.pdf' : 'CV_Lucia_Viazzo_English.pdf';
        
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Language Toggle Functionality
const langToggle = document.getElementById('langToggle');
const langText = document.querySelector('.lang-text');

let currentLang = localStorage.getItem('language') || 'es';
updateLanguage(currentLang);

if (langToggle) {
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('language', currentLang);
        updateLanguage(currentLang);
    });
}

function updateLanguage(lang) {
    if (langText) langText.textContent = lang === 'es' ? 'EN' : 'ES';
    document.querySelectorAll('[data-es][data-en]').forEach(element => {
        element.innerHTML = element.getAttribute(`data-${lang}`);
    });
    document.documentElement.lang = lang;
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close hamburger menu after clicking a link
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.getElementById('hamburgerBtn');
        if (navLinks && hamburger) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Hamburger Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.querySelector('.nav-links');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Project Modals
document.querySelectorAll('.project-card[data-modal]').forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        const overlay = btn.closest('.modal-overlay');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});
