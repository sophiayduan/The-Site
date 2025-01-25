var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";

});

const audio = document.getElementById('backgroundMusic');
const musicStatus = document.getElementById('musicStatus');
const circle = document.getElementById('circle');
let isPlaying = false; 

musicStatus.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause(); 
        musicStatus.textContent = "OFF"; 
        circle.style.backgroundColor = '#ff2b39';


    } else {
        audio.play(); 
        musicStatus.textContent = "ON"; 
        circle.style.backgroundColor = '#69c29e';

    }
    isPlaying = !isPlaying;
});




