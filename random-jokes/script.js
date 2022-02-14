const btnNextQuote = document.querySelector(".quote__btn");
const btnChangeLang = document.querySelector(".quote__langBtn");
const quoteText = document.querySelector(".quote__text");
const quoteAuthor = document.querySelector(".quote__author");
const main = document.querySelector("body");
const urlsQutes = {
  en: "https://type.fit/api/quotes",
  ru: "./assets/quotes.json",
};
btnNextQuote.addEventListener("click", changeQuote);
btnChangeLang.addEventListener("click", changeLang);

function initData() {
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "ru");
  }
  switchBtn();
  changeQuote();
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
  changeQuoteEffect()
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function showQuote(data) {
  quoteText.textContent = data.text;
  quoteAuthor.textContent = data.author;
}

function changeLang() {
  let lang = localStorage.getItem("lang") === "ru" ? "en" : "ru";
  localStorage.setItem("lang", lang);
  switchBtn();
  changeQuote();
}

function switchBtn() {
  if (localStorage.getItem("lang") === "ru") {
    btnChangeLang.classList.add("quote__langBtn__ant");
  } else {
    btnChangeLang.classList.remove("quote__langBtn__ant");
  }
}

function changeQuoteEffect(){
main.style.background=`linear-gradient(to bottom right, ${generateRandomColor()},${generateRandomColor()} 20%, ${generateRandomColor()} 40%, ${generateRandomColor()} 60%, ${generateRandomColor()}  80%, ${generateRandomColor()}  100%)`
}

function generateRandomColor(){
 return `rgb(${generateRandomNumber(0,200)},${generateRandomNumber(0,200)},${generateRandomNumber(0,200)})`
}