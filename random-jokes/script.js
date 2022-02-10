const btnNextQuote = document.querySelector(".quote__btn");
const quoteText = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__author");
const urlsQutes = {"en":"https://type.fit/api/quotes","ru":"./assets/quotes.json"}
btnNextQuote.addEventListener("click", changeQuote);


function initData() {
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "ru");
  }
  changeQuote()
}

initData();

function changeQuote() {
  if (localStorage.getItem("lang") === "ru") {
    getQuotes(urlsQutes.ru);
  } else {
    getQuotes(urlsQutes.en);
  }
}

async function getQuotes(urlQ) {
  const res = await fetch(urlQ);
  const data = await res.json();
  const lengthMassiveQuotes = data.length;
  const numberOfQuote = generateRandomNumber(0, lengthMassiveQuotes - 1);
  showQuote(data[numberOfQuote]);
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}


function showQuote(data) {
  quoteText.textContent = data.text;
  quoteAuthor.textContent = data.author;
}

