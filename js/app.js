$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})



///ACCORDION
let acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
  this.classList.toggle("active");
  let panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
});
}

let arrow = document.querySelectorAll(".arrow-acc");

});