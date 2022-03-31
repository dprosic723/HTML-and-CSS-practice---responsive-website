

const formButton = document.querySelector(".contact-form button");
const formMessage = document.getElementById("text-input");

formButton.addEventListener("click", function(){
    console.log(formMessage.value);
    formMessage.value = "";
});


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