var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";

})

const audio = document.getElementById('backgroundMusic');
const musicStatus = document.getElementById('musicStatus');
const circle = document.getElementById('circle');
let isPlaying = true; 

musicStatus.addEventListener('click', () => {
if (isPlaying) {
    audio.pause(); 
    musicStatus.textContent = "ON"; 

} else {
    audio.play(); 
    musicStatus.textContent = "OFF"; 
    circle.style.backgroundColor = 'green';

}
isPlaying = !isPlaying; // Toggle the state
});
