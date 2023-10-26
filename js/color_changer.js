function initialize() {
  const myH1 = document.getElementById("page-title");
  myH1.addEventListener("click", changeColorToMyH1);
}

function changeColorToMyH1() {
  const myH1 = document.getElementById("page-title");
  myH1.style.color = "red";
}

initialize();