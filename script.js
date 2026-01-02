// script.js - Subtle animations and effects

// Minimal script solely for theme toggling
const toggleTheme = () => {
    const toggle = document.getElementById('themeToggle');
    toggle?.addEventListener('click', () => {
        document.documentElement.classList.toggle('theme-dark');
        toggle.textContent = document.documentElement.classList.contains('theme-dark') ? 'Light Mode' : 'Dark Mode';
    });
};

document.addEventListener('DOMContentLoaded', toggleTheme);