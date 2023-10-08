const toggle = document.getElementById("toogleDark");
const body = document.querySelector("body");

//toogle part

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.contains("bi-moon")) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    body.style.trasition = "2s";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    body.style.trasition = "2s";
  }
});
