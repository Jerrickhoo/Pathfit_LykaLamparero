// Handle wheel scrolling with improved accuracy for three sections
document.addEventListener('wheel', function(e) {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = document.querySelectorAll('.section');
    const viewportHeight = window.innerHeight;
    const currentScroll = window.scrollY;
    const currentSectionIndex = Math.round(currentScroll / viewportHeight);
    
    const nextIndex = currentSectionIndex + direction;
    if (nextIndex >= 0 && nextIndex < sections.length) {
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
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