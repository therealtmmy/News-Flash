let hamburger = document.getElementById("icon");
let links = document.getElementById("Nav-Three");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("icon");
  links.classList.toggle("overlay");
});
