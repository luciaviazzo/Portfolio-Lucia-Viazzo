const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .project-card, .value-item, .stack-category').forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.borderColor = 'rgba(232,160,180,0.85)';
    });
    el.addEventListener('mouseleave', () => {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(232,160,180,0.5)';
    });
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
    });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

   //THEME TOGGLE
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌙';
}
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});

   //HAMBURGER MENU
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navPanel = document.getElementById('navPanel');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
    hamburgerBtn.classList.add('is-open');
    navPanel.classList.add('is-open');
    navOverlay.classList.add('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    hamburgerBtn.classList.remove('is-open');
    navPanel.classList.remove('is-open');
    navOverlay.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.contains('is-open') ? closeMenu() : openMenu();
});

navOverlay.addEventListener('click', closeMenu);

navPanel.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));