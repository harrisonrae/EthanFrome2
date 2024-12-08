// Select the button, audio, and content container elements
const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');
const contentContainer = document.getElementById('contentContainer');

// Event listener for when the audio is fully loaded
audio.addEventListener('loadeddata', () => {
    // Remove the 'hidden' class to reveal the image and button
    contentContainer.classList.remove('hidden');
});

// Event listener for button click to play the audio
playButton.addEventListener('click', () => {
    audio.play();
});
