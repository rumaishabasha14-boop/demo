/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


/* =========================================
   FIRST CAROUSEL
========================================= */

const cardContainer =
    document.getElementById("cardContainer");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");


nextBtn.addEventListener("click", function () {

    cardContainer.scrollBy({
        left: 250,
        behavior: "smooth"
    });

});


prevBtn.addEventListener("click", function () {

    cardContainer.scrollBy({
        left: -250,
        behavior: "smooth"
    });

});


/* =========================================
   SECOND CAROUSEL
========================================= */

const categoryContainer =
    document.getElementById("categoryContainer");

const prevBtn2 =
    document.getElementById("prevBtn2");

const nextBtn2 =
    document.getElementById("nextBtn2");


nextBtn2.addEventListener("click", function () {

    categoryContainer.scrollBy({
        left: 250,
        behavior: "smooth"
    });

});


prevBtn2.addEventListener("click", function () {

    categoryContainer.scrollBy({
        left: -250,
        behavior: "smooth"
    });

});