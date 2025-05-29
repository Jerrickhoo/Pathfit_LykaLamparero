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
        const targetPosition = nextIndex * viewportHeight;
        const startPosition = currentScroll;
        const distance = targetPosition - startPosition;
        
        // Smooth scroll animation
        const duration = 1500; // Increased duration for smoother scroll
        const startTime = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smoother movement
            const easeInOutCubic = progress => {
                return progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            };
            
            const currentPosition = startPosition + distance * easeInOutCubic(progress);
            window.scrollTo(0, currentPosition);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Reset scroll lock after animation completes
                setTimeout(() => {
                    isScrolling = false;
                }, 200); // Short delay after animation
            }
        }
        
        requestAnimationFrame(animate);
    } else {
        isScrolling = false;
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