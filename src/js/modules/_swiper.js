import Swiper from 'swiper';

(() => {
	var slider = new Swiper('.js-slider', {
		 loop: true,
		 slidesPerView: 4,
		 keyboardControl: true,
		 grabCursor: true,
		 // pagination
		 navigation: {
			nextEl: '.scam__arrow_right',
			prevEl: '.scam__arrow_left',
		 },
		 pagination: {
			el: '.scam__counter',
			type: 'fraction',
		 },
		 breakpoints: {
			0: {
			  	slidesPerView: 1,
				pagination: {
					clickable: true,
					el: '.scam__pagination',
					type: 'bullets',
				},
			},
			580: {
			  	slidesPerView: 1,
			},
			769: {
			  	slidesPerView: 2,
			},
			1025: {
			  	slidesPerView: 4,
			},
		  }
	});
	function slide_height() {
		$(".scam__list").each(function(){
			var height = $(this).height();
			$(".scam__item").css("height", height + "px");
		});
	};
	setTimeout(slide_height,1000);
	$( window ).resize(function() {
		slide_height();
	});
})($);