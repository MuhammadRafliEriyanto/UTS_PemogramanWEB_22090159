const navbar = document.querySelector(".navbar-list");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("active")
} )
