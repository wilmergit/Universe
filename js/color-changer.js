function initialize() {
  const MY_H1 = document.getElementById("page-title");
  MY_H1.addEventListener("click", changeColorToMyH1);
}

function changeColorToMyH1() {
  const MYH1 = document.getElementById("page-title");
  MYH1.style.color = "red";
}

initialize();