let board = document.querySelector(".board");
board.addEventListener("click", clickCell);
let whoMove = document.querySelector(".header__whoMove");
let btnShowStatistic = document.querySelector(".footer__stat");
btnShowStatistic.addEventListener("click", showStatistic);
let isMovePlayerX = true;
let moveCounter = 0;
let listWinCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let boardCondition = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
};
function clickCell(e) {
  if (e.target.classList.contains("board__cell")) {
    if (boardCondition[e.target.dataset.id] == "") {
      makeMove(e.target.dataset.id);
    }
  }
}

function makeMove(id) {
  playSound();
  let cell = document.querySelector(`[data-id="${id}"]`);
  let currentMove = isMovePlayerX ? "X" : "O";
  cell.textContent = currentMove;
  boardCondition[id] = currentMove;

  switch (chekingGameSituation()) {
    case "win":
      perfomingWin();
      break;
    case "draw":
      perfomingDraw();
      break;
    case "nextTurn":
      changePlayer();
      break;
    default:
      break;
  }
}
function changePlayer() {
  isMovePlayerX = isMovePlayerX ? false : true;
  changeText();
}

function changeText() {
  whoMove.textContent = `Move for player ${isMovePlayerX ? "X" : "O"}`;
}
function chekingGameSituation() {
  let symb = isMovePlayerX ? "X" : "O";
  moveCounter++;
  for (let index = 0; index < listWinCombinations.length; index++) {
    if (
      boardCondition[listWinCombinations[index][0]] === symb &&
      boardCondition[listWinCombinations[index][1]] === symb &&
      boardCondition[listWinCombinations[index][2]] === symb
    ) {
      return "win";
    }
  }

  if (moveCounter == 9) {
    return "draw";
  }

  return "nextTurn";
}

function perfomingWin() {
  let statistic = `Player ${
    isMovePlayerX ? "X" : "O"
  } wins for ${moveCounter} turns`;
  updateStatistic(statistic);
  showModal({
    title: "Congratulations !",
    text: statistic,
    btn: "New game",
    func: restartGame,
  });
}
function perfomingDraw() {
  let statistic = `Draw`;
  updateStatistic(statistic);
  showModal({
    title: "Game ended in a tie !",
    text: statistic,
    btn: "New game",
    func: restartGame,
  });
}

function updateStatistic(statistic) {
  let lastGames = localStorage.getItem("last10Games")
    ? JSON.parse(localStorage.getItem("last10Games"))
    : [];
  lastGames.push(statistic);
  if (lastGames.length > 10) {
    lastGames = lastGames.splice(-10, 10);
  }
  localStorage.setItem("last10Games", JSON.stringify(lastGames));
}

function newGame() {
  isMovePlayerX = true;
  moveCounter = 0;
  boardCondition = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  };
  let boardCells = document.querySelectorAll(".board__cell");
  boardCells.forEach((x) => (x.textContent = ""));
}

function showModal(data) {
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("modal__container");
  document.querySelector("body").appendChild(modalContainer);

  let modal = document.createElement("div");
  modal.classList.add("modal");
  modalContainer.appendChild(modal);

  let modalTitle = document.createElement("h2");
  modalTitle.classList.add("modal__title");
  modalTitle.textContent = data.title;
  modal.appendChild(modalTitle);

  let modalText = document.createElement("p");
  modalText.classList.add("modal__text");
  modalText.innerHTML = data.text;
  modal.appendChild(modalText);

  let modalButton = document.createElement("button");
  modalButton.classList.add("modal__button");
  modalButton.textContent = data.btn;
  modalButton.addEventListener("click", data.func);
  modal.appendChild(modalButton);
}

function closeModal() {
  document.querySelector(".modal__container").remove();
}

function restartGame() {
  closeModal();
  newGame();
  changeText();
}

function playSound() {
  let audio = document.createElement("audio");
  audio.src = "./assets/sounds/tink.wav";
  audio.currentTime = 0;
  audio.volume = 0.2;
  audio.play();
}

function showStatistic() {
  let stat = localStorage.getItem("last10Games")
    ? JSON.parse(localStorage.getItem("last10Games"))
    : [];
  showModal({
    title: "Last ten games:",
    text: `<ul>${formatingStatistic(stat)}</ul>`,
    btn: "Close",
    func: closeModal,
  });
}

function formatingStatistic(str) {
  return str.map((x, i) => `<li>${i + 1}) ${x}</li>`).join("\n");
}
