document.querySelector(".contact-form button").addEventListener("click", function(){
    console.log(document.getElementById("text-input").value);
});


const hamburgerList = document.querySelector(".links-list");
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    hamburgerList.classList.toggle("active");
    console.log(hamburgerList.classList);
});
