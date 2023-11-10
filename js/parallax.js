function initialize(){
    window.addEventListener("scroll", moveImagesWhenUserScrolls);
}

function moveImagesWhenUserScrolls(){
    const SCROLL_POSITION = window.scrollY;
  
    const PLANETS = document.getElementById("planets");
    PLANETS.style.left = SCROLL_POSITION + "px";
}

initialize();