$(document).ready(function () {

	$('.video-box a').on({
		mouseenter: function () {
			$('.video-box a.active-video').removeClass('active-video');
			$(this).addClass('active-video');
		},
		mouseleave: function () {
			$('.video-box a.active-video').removeClass('active-video');
			$(this).addClass('active-video');
		},
	});


	/**
	 * hamburger menu rotate active status
	 * */
	$('.hamburger-mobile button').on('click', function () {
		$(this).toggleClass('active-hambur');
	});


	$('#mobileMenuOffcanvas').on('hidden.bs.offcanvas', function () {
		$('.hamburger-mobile button').removeClass('active-hambur')
	})



	// add dropdown icon mobile menu
	var dropdownIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="17.362" height="10.464" viewBox="0 0 17.362 10.464"><path id="icons8_expand_arrow" d="M9.682,12.953l6.342-6.212a.724.724,0,0,1,1.017.006l1.111,1.111a.724.724,0,0,1,0,1.026l-7.955,7.9a.723.723,0,0,1-1.023,0l-7.955-7.9a.724.724,0,0,1,0-1.026L2.323,6.747A.724.724,0,0,1,3.34,6.742Z" transform="translate(-1 -6.536)" fill="#334155"/></svg>';
	$('.mobile-menu-body ul.sub-menu').before('<span class="drop-mobile-menu-icon">' + dropdownIcon + '</span>')
	$('.drop-mobile-menu-icon').on('click', function () {
		$(this).toggleClass('drop-mobile-menu-icon-rotate')
		$(this).next('ul').slideToggle(200, 'swing')
	});
})


var testimonialSlide = new Swiper(".testimonial-slide", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
});

var myPortfolioSwiper = new Swiper(".myPortfolioSwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 60,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: false,
	},
	pagination: {
		el: ".swiper-pagination",
	},
});


