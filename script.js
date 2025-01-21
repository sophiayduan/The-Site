var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";

})

// const audio = document.getElementById('backgroundMusic');
// const musicStatus = document.getElementById('musicStatus');
// const circle = document.getElementById('circle');
// let isPlaying = true; 

// musicStatus.addEventListener('click', () => {
// if (isPlaying) {
//     audio.pause(); 
//     musicStatus.textContent = "ON"; 
//     circle.style.backgroundColor = '#ff2b39';


// } else {
//     audio.play(); 
//     musicStatus.textContent = "OFF"; 
//     circle.style.backgroundColor = '#69c29e';

// }
// isPlaying = !isPlaying; // Toggle the state
// });

const follow = document.querySelector(".follow");

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    follow.style.left = `${clientX - follow.offsetWidth / 2}px`;
    follow.style.top = `${clientY - follow.offsetHeight / 2}px`;
});
