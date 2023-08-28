$(document).ready(function() {

    $('.carsouel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        centerPadding: '60px',
        centerMode: true,
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: 2000,

        slidesToShow: 3

    });
    //$('.slides').slickPlay();

});
