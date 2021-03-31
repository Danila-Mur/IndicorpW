import "./header.sass";

/* const btnBurger = document.querySelector(".js--burger");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

function navMenu() {
  header.classList.toggle("header--mobile");
  nav.classList.toggle("js__open--nav");
}

btnBurger.addEventListener("click", navMenu); */

$(".js--burger").on("click", function() {
  $(".nav").toggle();
  if ($(".header").hasClass("header--mobile")) {
    $(".header").removeClass("header--mobile");
  } else {
    $(".header").addClass("header--mobile");
  }
});
