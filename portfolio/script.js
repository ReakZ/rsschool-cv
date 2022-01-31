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
    "Вёрстка соответствует макету. Ширина экрана 768px +48 \n блок <header> +6 \n секция hero +6 \n секция skills +6 \n секция portfolio +6 \n секция video +6 \n секция price +6 \n секция contacts +6\n блок <footer> +6\n" +
      "Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n" +
      "нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5\n" +
      "нет полосы прокрутки при ширине страницы от 768рх до 480рх +5\n" +
      "нет полосы прокрутки при ширине страницы от 480рх до 320рх +5\n" +
      "На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n" +
      "при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2\n" +
      "при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4\n" +
      "высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4\n" +
      "при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\n" +
      "бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2\n" +
      "ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\n" +
      "при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4\n"
  );
}
selfTest();

const seasonBtns = document.querySelector(".season-btns");
const seasonImages = document.querySelectorAll(".examples__item");

seasonBtns.addEventListener("click", changeImages);

function changeImages(e) {
  if (e.target.classList.contains("season-btn")) {
    console.log(e.target.dataset.season);
    let season = e.target.dataset.season;
    seasonImages.forEach(
      (img, index) => (img.src = `./assets/img/${season}/${index + 1}.jpg`)
    );
    changeClassActive(".season-btn",e)
  }
}


function changeClassActive(el,e){
  document.querySelectorAll(el).forEach(targer=>{
    targer.classList.remove("active")
  })
  e.target.classList.add("active")
}