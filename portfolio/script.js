const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    en: "en",
    ru: "ru",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    standart: "Standart",
    premium: "Premium",
    gold: "Gold",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    email: "E-mail",
    phone: "Phone",
    message: "Message",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    en: "ан",
    ru: "ру",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    standart: "Стандарт",
    premium: "Премиум",
    gold: "Золото",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    email: "Электронная почта",
    phone: "Телефон",
    message: "Сообщение",
    "send-message": "Отправить",
  },
};

function burger() {
  document.querySelector(".burger").addEventListener("click", (e) => {
    document.querySelector(".burger").classList.toggle("is-active");
    document.querySelector(".nav__list").classList.toggle("nav__list-show");
    document.querySelector("body").classList.toggle("body-overflow");
    document.querySelector(".nav").classList.toggle("nav-bg");
  });

  //

  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((el) => el.addEventListener("click", closeMenu));
}

function closeMenu(e) {
  if (e.target.classList.contains("nav__link")) {
    document.querySelector(".burger").classList.toggle("is-active");
    document.querySelector(".nav__list").classList.remove("nav__list-show");
    document.querySelector(".nav").classList.remove("nav-bg");
    document.querySelector("body").classList.remove("body-overflow");
  }
}
burger();

function selfTest() {
  console.log(
    "1.Смена изображений в секции portfolio +25 \n" +
      "2. Перевод страницы на два языка +25 \n" +
      "3. Переключение светлой и тёмной темы +25 \n" +
      "4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\n"
  );
}
selfTest();

const seasonBtns = document.querySelector(".season-btns");
const seasonImages = document.querySelectorAll(".examples__item");
seasonBtns.addEventListener("click", changeImages);

const langBtns = document.querySelector(".nav__langBtns");
langBtns.addEventListener("click", switchLang);

function changeImages(e) {
  if (e.target.classList.contains("season-btn")) {
    let season = e.target.dataset.season;
    seasonImages.forEach(
      (img, index) => (img.src = `./assets/img/${season}/${index + 1}.jpg`)
    );
    changeClassActive(".season-btn", e.target);
  }
}

function changeClassActive(el, e) {
  document.querySelectorAll(el).forEach((targer) => {
    targer.classList.remove("active");
  });
  e.classList.add("active");
}

function switchLang(e) {
  if (e.target.classList.contains("nav__langBtn")) {
    translate(e.target.dataset.lang);
  }
}

function translate(lang) {
  const strings = document.querySelectorAll("[data-i18n]");
  LocalStorageLang(lang);
  changeClassActive(
    ".nav__langBtn",
    document.querySelector(`[data-lang="${lang}"`)
  );
  strings.forEach((string) => {
    if (string.placeholder) {
      string.placeholder = i18Obj[lang][string.dataset.i18n];
      string.textContent = "";
      string.value = "";
    } else {
      string.textContent = i18Obj[lang][string.dataset.i18n];
    }
  });
}

let btn = document.querySelector(".switchTheme");
btn.addEventListener("click", switchTheme);

function switchTheme(){
 if(localStorage.getItem("theme")==='dark'){
  localStorage.setItem("theme","light")
 }
 else{
  localStorage.setItem("theme","dark")
 }
 changeTheme()
}
function changeTheme() {
  let theme= localStorage.getItem("theme")

  const category = [".portfolio", ".skills", ".video", ".price"];
  if (theme === "light") {
    document.querySelector(".switchTheme").classList.add("active");
    category.forEach((x) => {
      document.querySelector(x).classList.add("light-theme");
    });
  } else {
    document.querySelector(".switchTheme").classList.remove("active");
    category.forEach((x) => {
      document.querySelector(x).classList.remove("light-theme");
    });
  }
}

function setLocalStorage() {
  localStorage.setItem("lang", lang);
  localStorage.setItem("theme", theme);
}
function LocalStorageLang(lang) {
  localStorage.setItem("lang", lang);
}
function LocalStorageTheme(theme) {
  localStorage.setItem("theme", theme);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("lang")) {
    const lang = localStorage.getItem("lang");
    translate(lang);
  } else {
    localStorage.setItem("lang", "en");
  }

  if (localStorage.getItem("theme")) {
    const theme = localStorage.getItem("theme");
    changeTheme(theme);
  } else {
    localStorage.setItem("theme", "dark");
  }
}
window.addEventListener("load", getLocalStorage);


function preloadSeasonsImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn']
  seasons.forEach(season=>{
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${season}/${i}.jpg`;
    }
  })

}
preloadSeasonsImages();