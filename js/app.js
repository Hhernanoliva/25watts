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


//scrolpsy
// In-view function
const handleView = item => {
    const linkEl = document.querySelector(`#link-${item}`);
      
    let offsetHeight = 0.6*(window.innerHeight)
    inView.offset({
      bottom:offsetHeight
    });
    
    inView(`#${item}`)
      .on("enter", () => linkEl.classList.add('is-active'))
      .on("exit", el  => linkEl.classList.remove('is-active'))
  };
  
  // Apply method on each DOM element 
  ["one", "two", "three", "four", "five", "six"].forEach(handleView);