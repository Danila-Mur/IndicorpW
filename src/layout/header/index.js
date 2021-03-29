import "./header.sass";

const btnBurger = document.querySelector(".js--burger");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

function navMenu() {
  header.classList.toggle("header--mobile");
  nav.classList.toggle("js__open--nav");
}

btnBurger.addEventListener("click", navMenu);
