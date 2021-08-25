// Auto slide for the carousel

var slideIndex = 0;
showSlides();

var slideIndex = 0;
showSlides();

function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {
      slideIndex = 1;
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex - 1].style.display = "block";
   dots[slideIndex - 1].className += " active";
   setTimeout(showSlides, 4000); // Change image every 2 seconds
}
// End of auto slide for the carousel

// code for the backdrop

let backdrop = document.querySelector(".backdrop");
let close = document.querySelector(".close-btn i");
let open = document.querySelector(".heading-grid2 i");
let sidebar = document.querySelector(".sidebar-container");
// open.addEventListener("click", function () {
//    sidebar.style.display = "block";
//    backdrop.style.display = "block";
// });
// close.addEventListener("click", function () {
//    sidebar.style.display = "none";
//    backdrop.style.display = "none";
// });
backdrop.addEventListener("click", function () {
   sidebar.style.width = "0";
   backdrop.style.display = "none";
});

// End of code for the backdrop

open.addEventListener("click", function () {
   sidebar.style.width = "35%";
   backdrop.style.display = "block";
});
close.addEventListener("click", function () {
   sidebar.style.width = "0";
   backdrop.style.display = "none";
});
