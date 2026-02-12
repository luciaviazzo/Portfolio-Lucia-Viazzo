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
        element.textContent = element.getAttribute(`data-${lang}`);
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
    });
});
