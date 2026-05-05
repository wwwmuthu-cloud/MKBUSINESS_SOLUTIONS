// Parallax effect on scroll for background particles
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        const speed = 0.5 + (index * 0.1);
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    alert(`Thank you ${name}! We will get back to you soon.`);
    this.reset();
});

// Staggered entrance animations for list items
function addListItemAnimations() {
    const items = document.querySelectorAll('section ul li');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.15}s`;
    });
}

// Counter animation for stats
function animateCounters() {
    const stats = document.querySelectorAll('.stat h3');
    const duration = 2000;
    
    stats.forEach(stat => {
        const finalValue = parseInt(stat.textContent);
        if (!isNaN(finalValue)) {
            const regex = /(\d+)/;
            const match = stat.textContent.match(regex);
            if (match) {
                const increment = finalValue / (duration / 16);
                let currentValue = 0;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        stat.textContent = stat.textContent.replace(/\d+/, finalValue);
                        clearInterval(counter);
                    } else {
                        stat.textContent = stat.textContent.replace(/\d+/, Math.ceil(currentValue));
                    }
                }, 16);
            }
        }
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.getElementById('about');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Modern scroll animation observer
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.1}s`;
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(section);
});

// Add parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero::before');
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animate list items on view
addListItemAnimations();

// Add hover glow effect to nav links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.textShadow = '0 0 15px rgba(255, 16, 240, 0.9)';
    });
    
    link.addEventListener('mouseout', function() {
        this.style.textShadow = 'none';
    });
});\n