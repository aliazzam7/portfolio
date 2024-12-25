// Optional JavaScript for interactive behavior (e.g., animations, scroll effects, etc.)

// Fade in animation on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 150) {
            element.classList.add('fade-in');
        } else {
            element.classList.remove('fade-in');
        }
    });
});
