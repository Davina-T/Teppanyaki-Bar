// Automatically Hide Navbar in Dropdown

$('.navbar-nav li a').on('click', function(){
    if(!$( this ).hasClass('dropdown-toggle')){
        $('.navbar-collapse').collapse('hide');
    }
});

// Active Navbar Effect

$(document).ready(function() {
    $(".nav a").on("click", function() {
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});

// Active Menu Effect

$(".btn-link").click(function() {
    $(".btn-link.colour").removeClass("colour");
    $(this).toggleClass("colour");
});

// Navbar Scroll Effect

(function ($) {
    $(document).ready(function(){
      $(".navbar").hide();

      $(function () {
          $(window).scroll(function () {
              if ($(this).scrollTop()) {
                  $('.navbar').stop().fadeIn(500);
              } else {
                  $('.navbar').stop().fadeOut(500);
              }
          });
      });
  });
}(jQuery));

// Contact Link Hover Effects

$(".facebook-link").mouseenter(function() {
    $(".facebook-link").addClass("colour");
}).mouseleave(function() {
    $(".facebook-link").removeClass("colour");
});

$(".address-link").mouseenter(function() {
    $(".address-link").addClass("colour");
}).mouseleave(function() {
    $(".address-link").removeClass("colour");
});

// Scroll Animation

var slideLeft = {
    duration: 2000,
    distance: '300px',
    origin: 'left',
    viewFactor: 0.4
}

var slideRight = {
    duration: 2000,
    distance: '300px',
    origin: 'right',
    viewFactor: 0.4
}

ScrollReveal().reveal('.history-box', slideLeft);

ScrollReveal().reveal('.history-image', slideRight);

ScrollReveal().reveal('.gallery-image1', slideLeft);

ScrollReveal().reveal('.gallery-image2', slideRight);

ScrollReveal().reveal('.gallery-image3', slideLeft);

ScrollReveal().reveal('.gallery-image4', slideRight);
