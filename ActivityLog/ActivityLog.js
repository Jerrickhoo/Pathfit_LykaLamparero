document.addEventListener('DOMContentLoaded', function() {
    // Add click handler for gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // You can add functionality here if you want to show a larger version of the image
            const img = this.querySelector('img');
            if (img) {
                // Example: Could show the image in a modal/lightbox
                console.log('Clicked image:', img.src);
            }
        });
    });
});