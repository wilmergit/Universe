const IMAGE = document.getElementsByClassName("slider-img");

for (let i = 0; i < IMAGE.length; i++) {
  IMAGE[i].addEventListener("click", function () {
    remove();
    addition(IMAGE[i]);
  });
}

function remove() {
  for (let j = 0; j < IMAGE.length; j++) {
    IMAGE[j].classList.remove("active");
  }
}

function addition(element) {
  element.classList.add("active");
}
