let hamburgerMenuInput = document.getElementById("checkbox");
let mobileNavLinks = document.getElementsByClassName("nav-mobile")[0];
hamburgerMenuInput.addEventListener("click", () => {
  mobileNavLinks.classList.toggle("show");
});
let accordionButton = document.getElementsByClassName("accordion-button");
let i;
for (let i = 0; i < accordionButton.length; i++) {
  accordionButton[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (panel.style.display === "inline-block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "inline-block";
    }
  });
}
