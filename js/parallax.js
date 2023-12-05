function initialize() {
  window.addEventListener("scroll", moveImagesWhenUserScrolls);
}

function moveImagesWhenUserScrolls() {
  const SCROLL_POSITION = window.scrollY;

  const EARTH = document.getElementById("earth");
  EARTH.style.top = SCROLL_POSITION + "px";
  
  const INTRO = document.getElementById("intro");
  INTRO.style.left = SCROLL_POSITION + "px";

  const INTRO_EXTRA = document.getElementById("intro-extra");
  INTRO_EXTRA.style.right = SCROLL_POSITION + "px";
}

initialize();

