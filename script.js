/* When the user scrolls the page, execute myFunction */
window.onscroll = function() {myFunction()};

// Get the navbar 
let navbar = document.getElementsByClassName("navbar");

//  Get the offset position of the navbar
let sticky = navbar.offsetTop;

/*  Add the sticky variable to the navbar when you reach the position of scrolling. Remove the 
sticky variable when you leave the scroll position */

function myFunction() {
    if (window.scrollY) {
        navbar.classList.add(sticky);
    } else {
        navbar.classList.remove(sticky);
    }
}