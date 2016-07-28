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
        var tabNumber = $(this).attr('id').slice(-1),
                tabId = "#showcase"+tabNumber;

        if (!($(this).hasClass('current'))) {
            if ($('.current').length > 0) {
                var newContent = $(tabId).html();
                if ($(this).css('margin-top') === "30px") {
                    $('.details-container').remove();
                    $(newContent).insertAfter($(this).parent().parent());
                    $('.details-container').css('max-height', '9999px').css('opacity', '1');
                    $('.tab-pane-pics').slick({
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    });
                } else {
                    $('.details-container').replaceWith(newContent);
                    $('.details-container').css('max-height', '9999px').css('opacity', '1');
                    $('.tab-pane-pics').slick({
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false
                    });
                }
                $('.js-close-details').click(function () {
                    $('.js-details').removeClass('current');
                    $('.details-container').css('max-height', '0').css('opacity', '0');
                    $('.details-container').remove();
                    var arrowId = '#arrow' + tabNumber;
                    $(arrowId).animate({
                        bottom: '-=5'
                    }, 100, function () {
                        $('.arrow-up').addClass('hidden');
                    });
                });
                
                var $arrow = $('.current').parent().parent().find('.arrow-up');
                $arrow.animate({
                    bottom: '-=5'
                }, 100, function () {
                    $arrow.addClass('hidden');
                });
                $('.js-details').removeClass('current');
                $(this).addClass('current');
                var $thisArrow = $(this).parent().parent().find('.arrow-up');
                $thisArrow.removeClass('hidden').animate({
                    bottom:'+=5'
                }, 100);

            } else {
                $(this).addClass('current');
                // check for mobile resolutions
                if ($(this).css('margin-top') === "30px") {
                    $($(tabId).html()).insertAfter($(this).parent().parent());
                    $('.tab-pane-pics').slick({
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false
                    });
                } else {
                    $($(tabId).html()).insertAfter('.gallery-container');
                    $('.tab-pane-pics').slick({
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false
                    });
                }
                $('.details-container').css('max-height', '9999px').css('opacity', '1');
                $('.js-close-details').click(function() {
                    $('.js-details').removeClass('current');
                    $('.details-container').css('max-height', '0').css('opacity', '0');
                    $('.details-container').remove();
                    var arrowId = '#arrow'+tabNumber;
                    $(arrowId).animate({
                        bottom:'-=5'
                    }, 100, function(){
                        $('.arrow-up').addClass('hidden');
                    });
                });
                $(this).parent().next().next().removeClass('hidden').animate({
                    bottom:'+=5'
                }, 100);
            }
        }
    });
});