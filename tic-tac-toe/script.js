let board = document.querySelector(".board");
board.addEventListener("click", clickCell);
let whoMove = document.querySelector(".header__whoMove");
let isMovePlayerX = true;
let moveCounter = 0;
let listWinCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 9],
  [0, 4, 9],
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
  let cell = document.querySelector(`[data-id="${id}"]`);
  let currentMove = isMovePlayerX ? "X" : "o";
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
  whoTurn.textContent = `Move for player ${isMovePlayerX ? "X" : "o"}`;
}
function chekingGameSituation() {
  let symb = isMovePlayerX ? "X" : "o";
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
  let statistic = `Player ${isMovePlayerX ? "X" : "o"} for ${moveCounter} turns`;
 //modal
  updateStatistic(statistic);
}
function perfomingDraw() {
  let statistic = `Draw`;
//modal
  updateStatistic(statistic);
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
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  };
  let boardCells = document.querySelectorAll(".board__cell");
  boardCells.forEach(x => (x.textContent = ""));
}

