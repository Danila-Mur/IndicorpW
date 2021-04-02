import "./header.sass";

/* const btnBurger = document.querySelector(".js--burger");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

function navMenu() {
  header.classList.toggle("header--mobile");
  nav.classList.toggle("js__open--nav");
}

btnBurger.addEventListener("click", navMenu); */

const $burger = $(".js-burger");
const $burgerItem = $burger.find(".header__burger-item");
const $menu = $(".js-open-nav");

$(window).on('resize', function() {
  if ($(document).outerWidth() > 768) {
    $menu.css("display", "");
    $burgerItem.hasClass("header__burger-item--open")
      ? $burgerItem.removeClass("header__burger-item--open")
      : null;
  }

      
});
$burger.on("click", function() {
  $menu.slideToggle();
  $burgerItem.toggleClass("header__burger-item--open");
  /* if ($(".header").hasClass("header--mobile")) {
    $(".header").removeClass("header--mobile");
  } else {
    $(".header").addClass("header--mobile");
  } */
});
