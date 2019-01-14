// Active Effect

$(document).ready(function() {
    $(".nav a").on("click", function() {
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    })
})

// Navbar Scroll Effect

(function ($) {
    $(document).ready(function(){
      $(".navbar").hide();

      $(function () {
          $(window).scroll(function () {
              if ($(this).scrollTop() > 100) {
                  $('.navbar').stop().fadeIn(800);
              } else {
                  $('.navbar').stop().fadeOut(800);
              }
          });
      });
  });
}(jQuery));