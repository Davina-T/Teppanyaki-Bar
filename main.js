// Active Effect

$(document).ready(function() {
    $(".nav a").on("click", function() {
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    })
})

// Navbar Scroll Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('colour');
    } else {
        $('nav').removeClass('colour');
    }
})