$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.header__menu').addClass('active');
        } else {
            $('.header__menu').removeClass('active');
        }
    });
});