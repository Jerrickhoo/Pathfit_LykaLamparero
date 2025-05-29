// Handle wheel scrolling
document.addEventListener('wheel', function(e) {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = document.querySelectorAll('.section');
    const currentSection = Array.from(sections).find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -100 && rect.top <= 100;
    });
    
    if (currentSection) {
        const currentIndex = Array.from(sections).indexOf(currentSection);
        const nextIndex = currentIndex + direction;
        if (nextIndex >= 0 && nextIndex < sections.length) {
            sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }
}, { passive: false });

// Handle navigation clicks
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});