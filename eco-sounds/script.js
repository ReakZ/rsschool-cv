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

function selfСheck() {
  console.log(
    "1)Вёрстка +10 \n -есть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать.Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5 \n -в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n" +
      "2)При кликах по интерактивным элементам меняется изображение +10 \n" +
      "3)При кликах по интерактивным элементам меняется звук +10 \n" +
      "4)Активный в данный момент интерактивный элемент выделяется стилем +10 \n" +
      "5)Кнопка Play/Pause +20 \n -есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10 \n -внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10"

  );
}
selfСheck();

