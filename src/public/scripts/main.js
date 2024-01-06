const navClick = document.querySelector(".nav__profile__link");
const navClickIcon = document.querySelector(".nav__profile__icon");
const dropdown = document.querySelector(".dropdown");

let navOpen = true;
navClick.addEventListener("click", function () {
    if(navOpen) {
        navClickIcon.classList.add("nav__profile__icon--open");
        dropdown.style.display = "block";
        navOpen = false;
    } else {
        navClickIcon.classList.remove("nav__profile__icon--open");
        dropdown.style.display = "none";
        navOpen = true;
    }
});
