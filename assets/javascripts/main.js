$(document).ready(function() {
    // dropzone plugin init
    // Dropzone.autoDiscover = false;
    // var myDropzone = new Dropzone("#my-awesome-dropzone", { url: "/file/post"});
    // myDropzone.on("drop", function(e) {
    //     $('#dropzone-prompt').css('display', 'none');
    // });

    var navbarTransform = function() {
        if ($(window).scrollTop() > 35 && $(window).width() > 752) {
            $('.navbar-wrapper').css('background-color', 'rgba(38, 34, 35, 0.95)');
            $('.js-anchor').addClass('nav-link-fixed');
            $('.top-logo').addClass('top-logo-resized');
        } else if ($(window).scrollTop() < 35 && $(window).width() > 752){
            $('.navbar-wrapper').css('background-color', 'transparent');
        } else if ($(window).scrollTop() > 35 && $(window).width() < 752) {
            $('.js-anchor').removeClass('nav-link-fixed');
            $('.top-logo').removeClass('top-logo-resized');
        }
    };
    $(window).resize(navbarTransform());
    $(window).scroll(function () {
        if ($(window).scrollTop() > 35 && $(window).width() > 752) {
            var alpha =  Math.min(0.95 ,($(window).scrollTop() - 35)/135);
            $('.navbar-wrapper').css('background-color', 'rgba(38, 34, 35, '+alpha+')');
            $('.js-anchor').addClass('nav-link-fixed');
            $('.top-logo').addClass('top-logo-resized');
        }
        if ($(window).scrollTop() < 35 && $(window).width() > 752) {
            $('.navbar-wrapper').removeClass('navbar-fixed');
            $('.navbar-wrapper').css('background-color', 'rgba(38, 34, 35, 0)');
            $('#logo-small').css('opacity', '0');
            $('.js-anchor').removeClass('nav-link-fixed');
            $('.top-logo').removeClass('top-logo-resized');
            $('.js-anchor').css('color','white');
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
                tabId = "#showcase"+tabNumber,
                swipe =false; 

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
                    $('.tab-pane-pics').on('swipe', function(e) {
                        swipe = true;
                    });
                    $('.tab-pane-pics').on('afterChange', function(e) {
                        swipe = false;
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
                    $('.tab-pane-pics').on('swipe', function(e) {
                        swipe = true;
                    });
                    $('.tab-pane-pics').on('afterChange', function(e) {
                        swipe = false;
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
                    $('.tab-pane-pics').on('swipe', function(e) {
                        swipe = true;
                    });
                    $('.tab-pane-pics').on('afterChange', function(e) {
                        swipe = false;
                    });
                } else {
                    $($(tabId).html()).insertAfter('.gallery-container');
                    $('.tab-pane-pics').slick({
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false
                    });

                    $('.tab-pane-pics').on('swipe', function(e) {
                        swipe = true;
                    });
                    $('.tab-pane-pics').on('afterChange', function(e) {
                        swipe = false;
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

        $('.tab-pane-img').off().click(function() {
            if (!swipe) {
                var pswpElement = document.querySelectorAll('.pswp')[0];

            // build items array
            var items = [
                {
                    src: $(this).attr('src'),
                    w: 400,
                    h: 400
                }
            ];

            // define options (if needed)
            var options = {
                // optionName: 'option value'
                // for example:
                index: 0 // start at first slide
            };

            // Initializes and opens PhotoSwipe
            var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();

            }
        });
    });

    $('#js-feedback').click(function() {
            var bodyInnerWidth = $('body').innerWidth();
            $('.navbar-wrapper').css('width', bodyInnerWidth);
            $('.top-logo').css('left', (bodyInnerWidth/2) - 35);
            $('.language-panel').css('left', bodyInnerWidth - 100);
        });
    $('#myModal').on('hidden.bs.modal', function () {
            $('.navbar-wrapper').css('width', '100%');
            $('.top-logo').css('left', 'calc(50% - 35px)');
            $('.language-panel').css('left', 'calc(100% - 100px)');
        });
});