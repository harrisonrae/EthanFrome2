// Select the button and audio elements
const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');

// Event listener for button click
playButton.addEventListener('click', () => {
    // Play the audio file
    audio.play();
});
