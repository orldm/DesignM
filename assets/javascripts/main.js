$(document).ready(function() {
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