document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('cookingVideo');
    const speedButtons = document.querySelectorAll('.control-btn');
    
    // Handle playback speed controls
    speedButtons.forEach(button => {
        button.addEventListener('click', function() {
            const speed = parseFloat(this.dataset.speed);
            video.playbackRate = speed;
            
            // Update active button state
            speedButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add keyboard shortcuts for video control
    document.addEventListener('keydown', function(e) {
        if (document.activeElement.tagName === 'INPUT') return;
        
        switch(e.key.toLowerCase()) {
            case ' ':
                // Space bar toggles play/pause
                e.preventDefault();
                video.paused ? video.play() : video.pause();
                break;
            case 'arrowleft':
                // Left arrow rewinds 10 seconds
                e.preventDefault();
                video.currentTime = Math.max(video.currentTime - 10, 0);
                break;
            case 'arrowright':
                // Right arrow forwards 10 seconds
                e.preventDefault();
                video.currentTime = Math.min(video.currentTime + 10, video.duration);
                break;
            case '1':
                // Number keys 1-4 control playback speed
                video.playbackRate = 1;
                updateActiveSpeedButton(1);
                break;
            case '2':
                video.playbackRate = 1.5;
                updateActiveSpeedButton(1.5);
                break;
            case '3':
                video.playbackRate = 0.5;
                updateActiveSpeedButton(0.5);
                break;
            case '4':
                video.playbackRate = 2;
                updateActiveSpeedButton(2);
                break;
        }
    });

    function updateActiveSpeedButton(speed) {
        speedButtons.forEach(btn => {
            btn.classList.toggle('active', parseFloat(btn.dataset.speed) === speed);
        });
    }

    // Double click to toggle fullscreen
    video.addEventListener('dblclick', function() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            video.requestFullscreen().catch(err => {
                console.log('Error attempting to enable fullscreen:', err);
            });
        }
    });
});