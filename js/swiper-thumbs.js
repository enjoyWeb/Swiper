(function($) {
    $.fn.swiperThumbs = function(options) {
        var opts = $.extend({}, $.fn.swiperThumbs.defaults, options);
        return this.each(function() {
	        var $this = $(this),
	        	$swiperContent = $($this.find('.swiper-content')),
	        	$swiperNav = $($this.find('.swiper-nav')),
	        	$swiperLeft = $($this.find('.arrow-left')),
	        	$swiperRight = $($this.find('.arrow-right'));
            var contentSwiper = $swiperContent.swiper({
                onSlideChangeStart: function() {
                    $.fn.swiperThumbs.updateNavPosition($swiperContent,$swiperNav,contentSwiper,navSwiper);
                },
                onInit: function(swiper) {
                    swiper.swipeNext($swiperContent,$swiperNav,contentSwiper,navSwiper);
                }
            });
            var navSwiper = $swiperNav.swiper({
                visibilityFullFit: true,
                slidesPerView: 'auto',
                onSlideClick: function() {
                    contentSwiper.swipeTo(navSwiper.clickedSlideIndex);
                }
            });
            $.fn.swiperThumbs.setContentSize($swiperContent,$swiperNav);
            $swiperLeft.click(function() {
                contentSwiper.swipePrev();
                $.fn.swiperThumbs.updateNavPosition($swiperContent,$swiperNav,contentSwiper,navSwiper);
            });
            $swiperRight.click(function() {
                contentSwiper.swipeNext();
                $.fn.swiperThumbs.updateNavPosition($swiperContent,$swiperNav,contentSwiper,navSwiper);
            });
		    $(window).resize(function() {
		        $.fn.swiperThumbs.setContentSize($swiperContent,$swiperNav);
		    });
        });
    };
    $.fn.swiperThumbs.updateNavPosition = function(c,n,cs,ns) {
    	var allActiveNav = n.find('.active-nav'),
    		allSlide = n.find('.swiper-slide'),
        	activeNav = $(allSlide).eq(cs.activeIndex);
        $(allActiveNav).removeClass('active-nav');
        $(activeNav).addClass('active-nav');
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index() > ns.activeIndex) {
                var thumbsPerNav = Math.floor(ns.width / activeNav.width()) - 1;
                ns.swipeTo(activeNav.index() - thumbsPerNav);
            } else {
                ns.swipeTo(activeNav.index());
            };
        };
    };
    $.fn.swiperThumbs.setContentSize = function(c,n) {
        c.css({ height: $(window).height() - n.height() });
    };
})(jQuery);
