import YTPlayer from "yt-player";
import "./index.sass";

export default () => {
  const player = new YTPlayer("#player");

  player.load("M7lc1UVf-VE");
  player.setSize("100%", "100%");

  $(".js-button-play").on("click", function() {
    $(".service__poster").addClass("display--none");
    $(this).addClass("display--none");
    player.play();
  });
};
