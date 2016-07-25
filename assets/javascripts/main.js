$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 35 && $(window).width() > 753) {
            $('.navbar-wrapper').addClass('navbar-fixed');
            var alpha =  Math.min(0.75 ,($(window).scrollTop() - 35)/135);
            var fontColor = parseInt(255 * (1 - Math.min(1.0, ($(window).scrollTop() - 35)/135)), 10);
            $('.navbar-wrapper').css('background-color', 'rgba(255, 255, 255, '+alpha+')');
            $('.js-anchor').css('color', 'rgb('+fontColor+','+fontColor+','+fontColor+')');
            $('.js-anchor').addClass('nav-link-fixed');
            $('.logo-placeholder').css('display', 'none');
        }
        if ($(window).scrollTop() < 35 && $(window).width() > 753) {
            $('.navbar-wrapper').removeClass('navbar-fixed');
            $('.navbar-wrapper').css('background-color', 'rgba(255, 255, 255, 0)');
            $('.js-anchor').removeClass('nav-link-fixed');
            $('.js-anchor').css('color','white');
            $('.logo-placeholder').css('display', 'block');
        }
    });
    $(window).resize(function() {
        if ($(window).scrollTop() > 35 && $(window).width() > 753) {
            $('.navbar-wrapper').addClass('navbar-fixed');
            $('.js-anchor').addClass('nav-link-fixed');
            $('.js-anchor').css('color','black');
            $('.logo-placeholder').css('display', 'none');
        } else if ($(window).scrollTop() > 35 && $(window).width() < 753) {
            $('.navbar-wrapper').removeClass('navbar-fixed');
            $('.js-anchor').removeClass('nav-link-fixed');
            $('.js-anchor').css('color','white');
            $('.logo-placeholder').css('display', 'block');
        }
    });
    $('.js-anchor').click(function(e) {
        e.preventDefault();
        $('.navbar-collapse').removeClass('in');
        $('.navbar-header').removeClass('background-dark')
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
    });
    $('.navbar-toggle').click(function(e) {
        if ($(this).parent().hasClass('background-dark')) {
            var that = this;
            setTimeout(function() {
                $(that).parent().removeClass('background-dark');
            }, 340);
        } else {
            $(this).parent().addClass('background-dark');
        }
    });
    $('.js-details').click(function() {
        if (!($(this).hasClass('current'))) {
            $(this).addClass('current');
            $('.details-container').css('max-height', '9999px').css('opacity', '1');
            $('.arrow-up').removeClass('hidden').animate({
                bottom:'+=5'
            }, 100);
        }
    });
    $('.js-close-details').click(function() {
        $('.js-details').removeClass('current');
        $('.details-container').css('max-height', '0').css('opacity', '0');
        $('.arrow-up').animate({
            bottom:'-=5'
        }, 100, function(){
            $('.arrow-up').addClass('hidden');
        });
    })
});