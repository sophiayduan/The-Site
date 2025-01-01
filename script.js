// Select the audio element and the button
const audio = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('music');

// Initially set the button text
let isPlaying = true; // Music starts playing

// Function to toggle music on and off
toggleButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause(); // Pause the music
        toggleButton.textContent = "Play Music"; // Change button text
    } else {
        audio.play(); // Play the music
        toggleButton.textContent = "Pause Music"; // Change button text
    }
    isPlaying = !isPlaying; // Toggle the state
});