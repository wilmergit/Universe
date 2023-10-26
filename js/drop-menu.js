function initialize() {
  const menuIcon = document.getElementById("menu-icon");
  menuIcon.addEventListener("click", showSideMenu);

  const closeMenu = document.getElementById("close-menu");
  closeMenu.addEventListener("click", hideSideMenu);

  const closeOption = document.getElementById("menu-options");
  closeOption.addEventListener("click", hideSideMenu);
}

function showSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.style.visibility = "visible";
}

function hideSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.style.visibility = "hidden";
}



initialize();