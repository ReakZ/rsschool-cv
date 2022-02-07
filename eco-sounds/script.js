let isPlay = false;

const audio = new Audio();
audio.src = "./assets/audio/solovey.mp3";
audio.currentTime = 0;



const btnPlay = document.querySelector(".player");
btnPlay.addEventListener("click", playAudio);
function playAudio() {
  if (!isPlay) {
    isPlay=true
    audio.play();
    btnPlay.classList.toggle("pause")
  } else {
    isPlay=false;
    audio.pause();
    btnPlay.classList.toggle("pause")
  }
}

