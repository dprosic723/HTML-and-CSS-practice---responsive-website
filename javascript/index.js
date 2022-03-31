document.querySelector(".contact-form button").addEventListener("click", function(){
    console.log(document.getElementById("text-input").value);
});


const hamburgerList = document.querySelector(".links-list");
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    if (hamburgerList.style.display === "flex") {
        hamburgerList.style.display = "none";
      } else {
        hamburgerList.style.display = "flex";
      }
    console.log(hamburgerList.classList);
});
