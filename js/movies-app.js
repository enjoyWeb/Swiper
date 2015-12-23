$(function(){
	function setContentSize() {
		$('.swiper-content').css({
			height: $(window).height()-$('.swiper-nav').height()
		})
	}
	setContentSize()
	$(window).resize(function(){
		setContentSize()
	})

	//Swiper Content
	var contentSwiper = $('.swiper-content').swiper({
		onSlideChangeStart: function(){
			updateNavPosition()
		},
		onInit: function(swiper){
	      swiper.swipeNext()
	    }
	})

	$('.arrow-left').click(function(){
		contentSwiper.swipePrev();
		updateNavPosition();
	})
	$('.arrow-right').click(function(){
		contentSwiper.swipeNext();
		updateNavPosition();
	})

	//Nav
	var navSwiper = $('.swiper-nav').swiper({
		visibilityFullFit: true,
		slidesPerView:'auto',
		//Thumbnails Clicks
		onSlideClick: function(){
			contentSwiper.swipeTo( navSwiper.clickedSlideIndex )
		}
	})

	//Update Nav Position
	function updateNavPosition(){
		$('.swiper-nav .active-nav').removeClass('active-nav')
		var activeNav = $('.swiper-nav .swiper-slide').eq(contentSwiper.activeIndex).addClass('active-nav');
		/*var j = $(".active-nav img").attr("num");
		$(".current-number").html(j + "/");*/
		if (!activeNav.hasClass('swiper-slide-visible')) {
			if (activeNav.index()>navSwiper.activeIndex) {
				var thumbsPerNav = Math.floor(navSwiper.width/activeNav.width())-1
				navSwiper.swipeTo(activeNav.index()-thumbsPerNav)
			}
			else {
				navSwiper.swipeTo(activeNav.index())
			}
		}
	}
})



