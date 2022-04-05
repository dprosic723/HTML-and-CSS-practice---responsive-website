//Handling form message
const formButton = document.querySelector(".contact-form button");
const formMessage = document.getElementById("text-input");

formButton.addEventListener("click", function(){
    console.log(formMessage.value);
    formMessage.value = "";
});

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

//console log news title
const newsTitles = document.querySelectorAll(".news-heading");
for(var i = 0; i < newsTitles.length; i++){
    var newsTitleString = newsTitles[i].innerHTML;
    newsTitleString = convertStringForWeb(newsTitleString);
    console.log(newsTitleString);
}

function convertStringForWeb(string){
    string = string.trim();
    string = string.toLowerCase();
    string = string.replace(/[^a-zA-Z0-9" "]/g, "");
    string = string.replace(/ /g, "-");
    return string;
}

//SWIPER


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});