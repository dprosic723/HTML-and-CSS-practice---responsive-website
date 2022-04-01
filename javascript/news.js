//Toggling hamburger menu
const hamburgerList = document.querySelector(".links-list");
const hamburgerMenuButton = document.querySelector(".hamburger-menu");
const hamburgerListItems = document.querySelectorAll(".links-list li");
hamburgerMenuButton.addEventListener("click", toggleHamburgerMenu);
for(var i = 0; i<hamburgerListItems.length; i++)
{hamburgerListItems[i].addEventListener("click", toggleHamburgerMenu);}
function toggleHamburgerMenu() {
    hamburgerList.classList.toggle("active");
    console.log(hamburgerList.classList)
}