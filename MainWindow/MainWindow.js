let isScrolling = false;
let scrollTimeout;

// Handle wheel scrolling with improved smoothness
document.addEventListener('wheel', function(e) {
    e.preventDefault();
    
    if (isScrolling) return;
    
    isScrolling = true;
    clearTimeout(scrollTimeout);
    
    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = document.querySelectorAll('.section');
    const viewportHeight = window.innerHeight;
    const currentScroll = window.scrollY;
    const currentSectionIndex = Math.round(currentScroll / viewportHeight);
    
    const nextIndex = currentSectionIndex + direction;
    if (nextIndex >= 0 && nextIndex < sections.length) {
        window.scrollTo({
            top: nextIndex * viewportHeight,
            behavior: 'smooth'
        });
    }
    
    // Add a delay before allowing next scroll
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
    }, 1200); // Longer delay for smoother transitions
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
                isScrolling = true;
                clearTimeout(scrollTimeout);
                const sectionTop = targetSection.offsetTop;
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
                scrollTimeout = setTimeout(() => {
                    isScrolling = false;
                }, 1200);
            }
        });
    });
});