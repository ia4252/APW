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
function plusSlides(n, entryNum) {
    showSlides(slideIndex += n, entryNum);
}

// Thumbnail image controls
function currentSlide(n, entryNum) {
    showSlides(slideIndex = n, entryNum);
}

function showSlides(n, entryNum) {
    let i;
    let slides = document.getElementById("entry-" + entryNum).getElementsByClassName("carousel");
    let dots = document.getElementById("entry-" + entryNum).getElementsByClassName("dot");
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