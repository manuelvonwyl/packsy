// Responsive Nav
const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector(".navigation");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Scroll
window.onscroll = function() {
    scroll();
};

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-150px";
    }
} {

}
