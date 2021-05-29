/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict
	var top;
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // $('a.page-scroll').bind('click', function(event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: ($($anchor.attr('href')).offset().top - 50)
    //     }, 1250, 'easeInOutExpo');
    //     event.preventDefault();
    // });

    $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - 220)
                }, 1250, 'easeInOutExpo');
                event.preventDefault();
        
            });
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 200
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

$(document).ready(function() {
/* ======= Header Background Slideshow - Flexslider ======= */    
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
    
    $('#bg-slider').flexslider({
        animation: "fade",
        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 6000
    });
	/* ======= Fixed header when scrolled ======= */
	$(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });
	
    });