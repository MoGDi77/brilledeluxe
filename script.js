// ===============================
// Brille Deluxe
// script.js
// ===============================

// Navigation beim Scrollen einfärben
window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 50) {
        nav.style.background = "rgba(17,17,17,0.85)";
        nav.style.backdropFilter = "blur(10px)";
        nav.style.transition = "0.3s";
    } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
    }

});


// Sanftes Scrollen
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Hero-Button Animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-3px)";
        button.style.transition = "0.3s";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});