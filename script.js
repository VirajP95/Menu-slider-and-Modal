const toggle = document.getElementById("toggle");
const open1 = document.getElementById("open");
const close1 = document.getElementById("close");
const modal = document.getElementById("modal");

// Toggle Nav
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

//Show Modal
open1.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

// Close Modal
close1.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

//Hide Modal from outside
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
