function initialize() {
  const MENU_ICON = document.getElementById("menu-icon");
  MENU_ICON.addEventListener("click", showSideMenu);

  const CLOSE_MENU = document.getElementById("close-menu");
  CLOSE_MENU.addEventListener("click", hideSideMenu);

  const CLOSE_OPTION = document.getElementById("menu-options");
  CLOSE_OPTION.addEventListener("click", hideSideMenu);
}

function showSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu");
  SIDE_MENU.style.visibility = "visible";
}

function hideSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu");
  SIDE_MENU.style.visibility = "hidden";
}



initialize();