
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".main-nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});