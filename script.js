document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));


    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');

            // Transform hamburger to X (simple CSS transition handled via standard classes if wanted, 
            // but for now we just toggle the menu visibility) 
            const bars = menuToggle.querySelectorAll('.bar');

            // Simple Animation for toggle button
            if (mobileMenu.classList.contains('active')) {
                body.style.overflow = 'hidden'; // Prevent scrolling
                bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                body.style.overflow = '';
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            body.style.overflow = '';

            // Reset hamburger
            const bars = menuToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Navbar Blur Effect on Scroll (Optional polish)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(3, 3, 3, 0.95)';
            navbar.style.boxShadow = '0 1px 0 rgba(255,255,255,0.05)';
        } else {
            navbar.style.background = 'rgba(3, 3, 3, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});
