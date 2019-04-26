$(document).ready(function() {
    $(window).scroll(function(){
        $('.hideme').each(function(i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500);
            }
        });
    });

    setTimeout(function() {
        $('.fadeinimage').animate({'opacity':'1'},1500);
    }, 1000)

    setTimeout(function() {
        $('.fadein').animate({'opacity':'1'},1500);
    }, 2000)

    $("#feed").hashtaghistory("chidofajny");

});
