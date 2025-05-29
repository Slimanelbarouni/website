// Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Page Navigation
const pageLinks = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');

pageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetPage = link.getAttribute('data-page');
        
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show target page
        document.getElementById(`${targetPage}-page`).classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        
        if (link.classList.contains('nav-links')) {
            link.classList.add('active');
        } else {
            document.querySelector(`.nav-links a[data-page="${targetPage}"]`).classList.add('active');
        }
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    contactForm.reset();
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-text, .about-image, .contact-info, .contact-form, .product-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on page load