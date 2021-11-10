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


// Header - Floating Badge 특정 높이 이상시 위치 이동 효과
let badge = document.querySelector('.info_badge')

window.addEventListener('scroll', function() {

	if(window.scrollY > 90) {
		gsap.to(badge, .2, {
			y: -80
		})
	} else {
		gsap.to(badge, .2, {
			y: 0
		})
	}

})


// Footer - To Top 맨위로가기 효과
let totop = document.querySelector('.to_top')

window.addEventListener('scroll', _.throttle(function() {

	if(window.scrollY > 945) {
		
		gsap.to(totop, .2, {
			display: 'block',
			x: 0
		})

	} else {
		
		gsap.to(totop, .2, {
			x: 100
		})
	}

}, 300))

totop.addEventListener('click', function(){
	window.scrollTo({top: 0, behavior: 'smooth'})
})


// Index Page - Slider Section 아이콘 클릭시 펼쳐짐 효과
let emailEls = document.querySelectorAll('.contact')
let contactEl = document.querySelectorAll('.contact_info')

console.log('emailEl >>> ', emailEls)
console.log('contactEl >>> ', contactEl)

emailEls.forEach((emailEl, index) => emailEl.addEventListener('click', function(){

	if(emailEl.classList.contains('selected')) {
		emailEl.classList.remove('selected');
		contactEl[index].style.display = 'none'
	} else {
		emailEl.classList.add('selected')
		contactEl[index].style.display = 'block'
	}
	
}))

// let emailEl = document.getElementById('email')
// let contactEl = emailEl.querySelector('.contact_info')

// 시행착오1
// emaildiv.addEventListener('focus', function() {
// 	emailEl.classList.add('focused')
// 	console.log('focus 이벤트 호출')
// 	emaildiv.innerText = 'j.areum92@gamil.com'
// })

// emaildiv.addEventListener('blur', function() {
// 	emailEl.classList.remove ('focused')
// 	console.log('blur 이벤트 호출')
// 	emaildiv.innerText = ''
// })

// 시행착오2
// function select() {
	
// 	if(emailEls.classList.contains('selected')) {
// 		emailEls.classList.remove('selected');
// 		contactEl.style.display = 'none'
// 	} else {
// 		emailEls.classList.add('selected')
// 		contactEl.style.display = 'block'
// 	}
// }

// 시행착오3
// emailEl.addEventListener('click', function(){
	
// 	if(emailEl.classList.contains('selected')) {
// 		emailEl.classList.remove('selected');
// 		contactEl.style.display = 'none'
// 	} else {
// 		emailEl.classList.add('selected')
// 		contactEl.style.display = 'block'
// 	}

// })

// 시행착오4
// if(emailEls.classList.contains('cont-email')) {
	// 	select(index)
	// } else if(emailEls.classList.contains('cont-phone')) {
	// 	select(index)
	// }


// Index Page - Skill Section 그래프바 애니메이션 효과
let skill = document.getElementById('skill')
let graphEls = skill.querySelectorAll('.graph')

console.log('skill >>> ', skill)
console.log('graph >>> ', graphEls)

window.addEventListener('scroll', _.throttle(function() {

	console.log('scrollY >>> ', window.scrollY)

	if(window.scrollY > 1225) {

		for(let i=0; i<graphEls.length; i++) {
			
			gsap.to(graphEls[i], 1, {
				width: graphEls[i].dataset.width +'%',
				height: '7px'
			});
		}

	} else {

		for(let i=0; i<graphEls.length; i++) {
			
			gsap.to(graphEls, 1, {
				width: '0%',
				height: '7px',
			});
		}
	}

}, 300))


// Index Page - Project Section 슬라이드 효과
// swiper(선택자, 옵션)
// window.addEventListener('resize', _.throttle(function() {
// }, 300))
new Swiper('.swiper-container', {
	// direction: 'horizontal' => swiper 함수에 기본값으로 들어가있음
	// slidesPerView: 3,        // 한번에 보여줄 슬라이드 개수
	spaceBetween: 20,        // 슬라이드 사이 여백
	centeredSlides: true,    // 1번 슬라이드가 가운데 보이기
	loop: true,              // 반복재생여부
	autoplay: {              // 자동재생여부 - 3s
		delay: 3000       
	},
	pagination: {
	el: '.swiper-pagination',   //페이지 번호 요소 선택자
	clickable: true   //사용자의페이지 번호 요소 제어가능 여부 (클릭가능 여부)
	},
	navigation: { // 슬라이드 이전/다음 버튼 사용 여부
	prevEl: '.swiper-prev',
	nextEl: '.swiper-next'
	},
	breakpoints: {				// 반응형
		100: {					// 100px 이상
			slidesPerView: 1,
		},
		600: {					// 768px 이상
			slidesPerView: 2, 
			centeredSlides: false
		},
		1000: {					// 1024px 이상
			slidesPerView: 3,
		}
	}
});