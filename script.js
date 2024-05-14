document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    var music = document.getElementById('background-music');

    // Example functionality to toggle play/pause for the video
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Ensure the music plays as expected (some browsers may block autoplay)
    music.play().catch(error => {
        console.log("Playback was prevented: " + error);
    });
});
