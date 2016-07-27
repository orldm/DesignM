$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 35 && $(window).width() > 752) {
            $('.navbar-wrapper').addClass('navbar-fixed');
            var alpha =  Math.min(0.95 ,($(window).scrollTop() - 35)/135);
            // var fontColor = parseInt(255 * (1 - Math.min(1.0, ($(window).scrollTop() - 35)/135)), 10);
            $('.navbar-wrapper').css('background-color', 'rgba(38, 34, 35, '+alpha+')');
            $('#logo-small').css('opacity', alpha);
            // $('.js-anchor').css('color', 'rgb('+fontColor+','+fontColor+','+fontColor+')');
            // $('.language-panel button').css('color', 'rgb('+fontColor+','+fontColor+','+fontColor+')');
            // $('.language-panel button.selected').css('border-color', 'rgb('+fontColor+','+fontColor+','+fontColor+')');
            $('.js-anchor').addClass('nav-link-fixed');
            // $('.logo-placeholder').css('display', 'none');
        }
        if ($(window).scrollTop() < 35 && $(window).width() > 752) {
            $('.navbar-wrapper').removeClass('navbar-fixed');
            $('.navbar-wrapper').css('background-color', 'rgba(38, 34, 35, 0)');
            $('#logo-small').css('opacity', '0');
            // $('.language-panel button').css('color', 'white');
            // $('.language-panel button.selected').css('border-color', 'white');
            $('.js-anchor').removeClass('nav-link-fixed');
            $('.js-anchor').css('color','white');
            // $('.logo-placeholder').css('display', 'block');
        }
    });
    $(window).resize(function() {
        if ($(window).scrollTop() > 35 && $(window).width() > 752) {
            $('.navbar-wrapper').addClass('navbar-fixed');
            $('.js-anchor').addClass('nav-link-fixed');
            // $('.js-anchor').css('color','black');
            $('.logo-placeholder').css('display', 'none');
        } else if ($(window).scrollTop() > 35 && $(window).width() < 752) {
            $('.navbar-wrapper').removeClass('navbar-fixed');
            $('.js-anchor').removeClass('nav-link-fixed');
            // $('.js-anchor').css('color','white');
            $('.logo-placeholder').css('display', 'block');
        }
    });
    $('.language-panel button').click(function(e) {
        $('.language-panel button').toggleClass('selected');
    });
    $('.language-panel-mobile button').click(function(e) {
        $('.language-panel-mobile button').toggleClass('selected');
        $('.navbar-toggle').trigger('click');
    });
    $('.js-anchor').click(function(e) {
        $('.navbar-toggle').trigger('click');
        // e.preventDefault();
        // $('.navbar-collapse').removeClass('in');
        // $('.navbar-header').removeClass('background-dark')
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
            if ($('.current').length > 0) {
                // $('.current').parent().parent().next().css('display', 'none')
                $('.details-container').css('max-height', '0').css('opacity', '0');
                var $arrow = $('.current').parent().parent().find('.arrow-up');
                $arrow.animate({
                    bottom: '-=5'
                }, 100, function () {
                    $arrow.addClass('hidden');
                });
                $('.js-details').removeClass('current');
            }
            $(this).addClass('current');
            $(this).parent().parent().next('.details-container').css('max-height', '9999px').css('opacity', '1');
            // $('.details-container').css('max-height', '9999px').css('opacity', '1');
            $(this).parent().next().next().removeClass('hidden').animate({
                bottom:'+=5'
            }, 100);
        }
    });
    $('.js-close-details').click(function() {
        // debugger
        $('.js-details').removeClass('current');
        $('.details-container').css('max-height', '0').css('opacity', '0');
        $(this).parent().prev().find('.arrow-up').animate({
            bottom:'-=5'
        }, 100, function(){
            $('.arrow-up').addClass('hidden');
        });
    });
});