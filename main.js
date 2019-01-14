// Active Effect

$(document).ready(function() {
    $(".nav a").on("click", function() {
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    })
})

// Navbar Scroll Effect

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            $('nav').css({"opacity" : "1"})
        } else {
            $('nav').css({"opacity": "0"})
        }
    })
})