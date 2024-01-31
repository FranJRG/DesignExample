const car = document.getElementById("car");
const explicationVideo = document.getElementById("explicationVideo");
const buttonPlay = document.getElementById("videoButton");
const title = document.getElementById("titleVideo");
const titleFirst = document.getElementById("titleFirst");
const backgroundAudio = document.getElementById("backgroundAudio");
const playAudioButton = document.getElementById("playAudioButton");

function playVideo() {
    car.setAttribute("hidden", "true"); 
    explicationVideo.removeAttribute("hidden");
    title.removeAttribute("hidden"); 
    titleFirst.setAttribute("hidden","true");
}

document.getElementById("explicationVideo").addEventListener("click", function() {
    this.play();
});

function playAudio() {
    backgroundAudio.play();
}

