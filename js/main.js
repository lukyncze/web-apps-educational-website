sal({ threshold: 0.01, });

$(function () {
    // SCROLLING TO TOP OF THE PAGE
    if ($(window).scrollTop() > ($(window).height() / 2)) {
        $('#scrollToTop').show();
    } else {
        $('#scrollToTop').hide();
    }

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > ($(window).height() / 2)) {
            $('#scrollToTop').fadeIn(100);
        } else {
            $('#scrollToTop').fadeOut(100);
        }
    });

    $("#scrollToTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 50);
    });

    // PRELOADER
    $(document).ready(function(){
        $(".loader-container").fadeOut(1000);
    });
});