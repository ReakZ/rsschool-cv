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
