const $hamburgerButton = document.querySelector(".toggle-btn");
const $togglerIcon = document.querySelector("#icon");

$hamburgerButton.onclick = () => togglerNav();

function togglerNav() {
  document.querySelector("#sidebar").classList.toggle("expand");
  $togglerIcon.classList.toggle("bxs-chevrons-right");
  $togglerIcon.classList.toggle("bxs-chevrons-left");
}