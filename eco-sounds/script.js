let isPlay = false;
let currentBird = "solovey";
const audio = new Audio();
audio.src = "./assets/audio/solovey.mp3";
audio.currentTime = 0;

const btnPlay = document.querySelector(".player");
btnPlay.addEventListener("click", playAudio);
function playAudio() {
  if (!isPlay) {
    isPlay = true;
    audio.play();
    btnPlay.classList.toggle("pause");
  } else {
    isPlay = false;
    audio.pause();
    btnPlay.classList.toggle("pause");
  }
}
const main = document.querySelector(".main");
const changeBirdsBtns = document.querySelector(".nav");
changeBirdsBtns.addEventListener("click", changeBird);
function changeBird(e) {
  if (e.target.classList.contains("nav__button")) {
    let btn = document.querySelectorAll(".nav__button");
    btn.forEach((x) => x.classList.remove("active"));
    e.target.classList.add("active");
    main.classList.remove(currentBird);
    currentBird = e.target.dataset.bird;
    main.classList.add(currentBird);
    isPlay = true;
    audio.src = `./assets/audio/${currentBird}.mp3`;
    audio.currentTime = 0;
    audio.play();

    if (!btnPlay.classList.contains("pause")) {
      btnPlay.classList.add("pause");
    }
  }
}
