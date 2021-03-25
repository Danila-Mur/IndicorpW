import "./header.sass";

const btnBurger = document.querySelector(".header__togler");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

function navMenu() {
  header.classList.toggle("header--mobile");
  nav.classList.toggle("is-open");
}

btnBurger.addEventListener("click", navMenu);
