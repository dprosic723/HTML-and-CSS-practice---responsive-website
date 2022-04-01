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

//Making news section clickable
const news1 = document.querySelector(".news1");
const news2 = document.querySelector(".news2");
const news3 = document.querySelector(".news3");
news1.onclick = function(){location.href = "night-vision-goggles-and-binoculars-the-possibilities-of-modern-technology.html";}
news2.onclick = function(){location.href = "spotlight-steineroptics-products-focus-on-reliability-ruggedness-and-optical-clarity.html";}
news3.onclick = function(){location.href = "range-day-roundup-reflex-sight-cooling-body-armor-popup-targets-and-much-more.html";}


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

