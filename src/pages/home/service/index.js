import "./index.sass";

const buttonPlay = document.querySelector(".service__button-play");
const videoPoster = document.querySelector(".service__poster");
const video = document.querySelector(".service__content-video");

function videoPlay() {
  buttonPlay.classList.add("display--none");
  videoPoster.classList.add("display--none");
  video.setAttribute(
    "src",
    "https://www.youtube.com/embed/wnTZyvOs1-k?&autoplay=1"
  );
}

buttonPlay.addEventListener("click", videoPlay);