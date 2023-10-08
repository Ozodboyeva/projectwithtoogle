const toggle = document.getElementById("toogleDark");
const body = document.querySelector("body");

//toogle part
toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi bi-brightness-high")) {
    body.style.backgroundColor = "red";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});
