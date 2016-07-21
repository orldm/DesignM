$(document).ready(function() {
    $('.js-anchor').click(function(e) {
        e.preventDefault();
        // console.log($.attr(this, 'href'));
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
    });
    $('.js-details').click(function() {
        if (!($(this).hasClass('current'))) {
            $(this).addClass('current');
            $('.details-container').css('max-height', '500px').css('opacity', '1');
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