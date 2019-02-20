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
    })
})

// Active Menu Effect

$(".btn-link").click(function() {
    $(".btn-link.colour").removeClass("colour");
    $(this).toggleClass("colour");
})

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