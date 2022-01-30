;(function($) {
    "use strict";

    $(document).ready(function(){
        $('.your-class').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            speed: 700,
            autoplay: true,
            autoplaySpeed: 2000,
            appendDots: '.hero-slider__check',
            prevArrow: '.links-slider-prev',
		    nextArrow: '.links-slider-next',
        });
      });
})(jQuery); 