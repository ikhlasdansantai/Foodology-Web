let hamburgerMenuInput = document.getElementById("checkbox");
let mobileNavLinks = document.getElementsByClassName("nav-mobile")[0];
hamburgerMenuInput.addEventListener("click", () => {
  mobileNavLinks.classList.toggle("show");
});
