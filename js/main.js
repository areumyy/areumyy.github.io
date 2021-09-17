$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});


// 공지사항/프로모션 스와이퍼(17, 32강 참고) -----------------------------------------------------------------------------------------------
// swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
	// 객체 데이터
	direction: 'vertical',
	autoplay: true,           // 자동재생여부
	loop: true                // 반복재생여부 (1-2-3-4-1-2-3-4-1 ...)
  });
  
  new Swiper('.promotion .swiper-container', {
	// direction: 'horizontal' => swiper 함수에 기본값으로 들어가있음
	slidesPerView: 3,        // 한번에 보여줄 슬라이드 개수
	spaceBetween: 10,        // 슬라이드 사이 여백
	centeredSlides: true,    // 1번 슬라이드가 가운데 보이기
	loop: true,              // 반복재생여부
	autoplay: {              // 자동재생여부 - 5s
	  delay: 5000       
	},
	pagination: {
	  el: '.promotion .swiper-pagination',   //페이지 번호 요소 선택자
	  clickable: true   //사용자의페이지 번호 요소 제어가능 여부 (클릭가능 여부)
	},
	navigation: { // 슬라이드 이전/다음 버튼 사용 여부
	  prevEl: '.promotion .swiper-prev',
	  nextEl: '.promotion .swiper-next'
	}
  });

