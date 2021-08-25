// code for the sidebar that didn't work from the main code
let backdrop = document.querySelector(".backdrop");
let close = document.querySelector(".close-btn i");
let open = document.querySelector(".heading-grid2 i");
let sidebar = document.querySelector(".sidebar-container");

open.addEventListener("click", function () {
   sidebar.style.width = "39%";
   backdrop.style.display = "block";
});

backdrop.addEventListener("click", function () {
   sidebar.style.width = "0";
   backdrop.style.display = "none";
});

close.addEventListener("click", function () {
   sidebar.style.width = "0";
   backdrop.style.display = "none";
});

// *************************************

// code for the accordion

let questions = document.querySelectorAll(".question");
questions.forEach(function (qst) {
   const btn = qst.querySelector(".question-btn");
   btn.addEventListener("click", function () {
      questions.forEach(function (item) {
         if (item !== qst) {
            item.classList.remove("show-text");
         }
      });
      qst.classList.toggle("show-text");
   });
});
