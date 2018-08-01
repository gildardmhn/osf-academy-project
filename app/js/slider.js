

$(document).ready(function(){
    $('.slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slideBar'
    });
    $('.slideBar').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slide',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});