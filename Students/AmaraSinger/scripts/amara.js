$(document).ready(function () {

});	// end of jQuery block


// toggle content stuff
function toggleContent(elem, num) {
    let parent = elem.parentNode;
    let content = parent.firstChild.nextSibling.nextSibling.nextSibling;
    if (content.style.display === "none") {
        content.style.display = "block";
    }
    else {
        content.style.display = "none";
    }
    // &#9660; is down arrow, &#9650; is up arrow
    if (elem.innerHTML === "Entry " + num + ": Show More") {
        elem.innerHTML = "Entry " + num + ": Show Less";
    }
    else {
        elem.innerHTML = "Entry " + num + ": Show More";
    }
}

// image carousel stuff
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}