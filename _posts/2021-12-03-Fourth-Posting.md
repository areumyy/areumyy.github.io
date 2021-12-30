---
layout: post
title: '[JS] swiper 라이브러리'
subtitle: JS 파헤치기
date: 2021-12-03
author: Areum-Jung
---  

### **들어가며**

프론트 강의에서 스타벅스 예제를 따라하며 Swiper 라이브러리를 처음으로 접했다.
이전에 팀 프로젝트에서 활용했으면 좋았을 거 같다는 생각들과 앞으로도 잘 활용할 거 같은 마음에 문서로 정리해두고자 한다.  
<br>

### **Swiper 라이브러리란?**
하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리로 편리하고 강력한 슬라이더, 스와이퍼를 사용할 수 있다.  

[Link : [swiper](https://swiperjs.com/)]  
<br>

### **Swiper.js CDN 연동하기**
Swiper 라이브러리를 사용하기 앞서 CDN을 연동해준다. (파일을 다운받아 연동하는 방법도 있음.)
``` html
<link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">
<script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
```  
<br>

### **HTML 환경 세팅하기**
``` html
<div class="swiper-container">
    <!-- 슬라이드 컨텐츠 -->
    <div class="swiper-wrapper">
        <!-- 슬라이드 -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- 페이지네이션 -->
    <div class="swiper-pagination"></div>

    <!-- 슬라이드 좌우 이동 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 스크롤바 -->
    <div class="swiper-scrollbar"></div>
</div>
```  
swiper-container / swiper-wrapper / swiper-slide 이 세가지의 요소가 슬라이드를 완성하는 가장 중요한 요소이다.  
<br>

### **JS 환경 세팅하기**
``` javascript
const swiper = new Swiper('.swiper-container', {
  // 옵션 설정
  direction: 'vertical',        // 수직방향으로 스와이프(디폴트 값은 'horizontal')
  autoplay: true,               // 자동재생여부
  loop: true,                   // 반복재생여부 (1-2-3-4-1-2-3-4-1 ...)
  slidesPerView: 3,             // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10,             // 슬라이드 사이 여백
  centeredSlides: true,         // 1번 슬라이드가 가운데 보이기
  loop: true,                   // 반복재생여부
  autoplay: {                   // 자동재생여부 - 5s
    delay: 5000       
  },
  // 페이지네이션 설정
  pagination: {
    el: '.swiper-pagination',   //페이지 번호 요소 선택자
    clickable: true             //사용자의페이지 번호 요소 제어가능 여부 (클릭가능 여부)
  },
  // 슬라이드 좌우 이동 설정
  navigation: {
    nextEl: '.swiper-button-next',  // 다음 버튼
    prevEl: '.swiper-button-prev',  // 이전 버튼
  },
  // 스크롤바 설정
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
```  
스타벅스 예제 구현 시 사용했던 옵션들로 기본적으로 많이 사용하는 설정들이고 생략 및 추가가 가능하다.  

더 많은 옵션은 [Swiper API](https://swiperjs.com/swiper-api) 공식 사이트에서 확인이 가능하다.  
<br>

#### 💡 **추가적으로 따로 설명하고 싶은 옵션**
슬라이더를 사용하여 구현한 깃블로그의 Skill-Section 반응형 CSS를 수정하던 중 문제가 발생하였다. 옵션 설정에서 슬라이드 개수를 3개로 설정해놔 브라우저 넓이가 줄어들면 레이아웃이 깨지는 현상이 나타났다. 브라우저 크기에 따라 슬라이드 개수를 수정해야하는 수정 포인트가 생겼고 `breakpoints` 라는 옵션으로 해결했다.  
<br>

#### **breakpoints**
swiper 라이브러리 옵션 중 breakpoints 라는 옵션이 있다. 이는 화면 넓이에 따라 레이아웃을 변경할 수 있는 반응형 슬라이드 설정 옵션으로 이 객체를 추가해주면 해결이 가능하다.
[Swiper API](https://swiperjs.com/swiper-api) 공식 사이트의 Parameter 항목에서 breakpoints 옵션에 대한 정보를 확인할 수 있다.
``` javascript
<script>
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,          // 1번 슬라이드가 중앙에 보이기
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {                          // 640px 이상
            slidesPerView: 1    
        },
        768: {                          // 768px 이상
            slidesPerView: 2,           // 슬라이드 개수를 짝수로 설정할 경우
            centeredSlides: false,      // 공통 옵션으로 centeredSlides를 설정해놨으면 해제해줘야함.
            spaceBetween: 20,
        },
        1024: {                         // 1024px 이상
            slidesPerView: 3
        }
    }
});
</script>
```  
breakpoits 객체를 추가하여 원하는 넓이에 따라 slidePerView를 설정해주면 된다.  

※ 단, 여기서 공통 옵션으로 `centeredSlides: true`를 설정해놨다면 slidePerView를 짝수로 재설정할 경우에 centeredSlides는 false로 재할당 해줘야한다. centeredSlides는 첫번째 슬라이드가 중앙에 보이게 설정하는 옵션으로 재할당하지 않고 슬라이드 개수를 짝수로 설정한다면 레이아웃이 깨진다. 위 예제코드에서 768px 이상 옵션의 `sliderPerview: 2` 는 `마지막 슬라이드(50%) - 첫 번째 슬라이드(100%) - 두 번째 슬라이드 (50%)`  형식으로 첫 번째 슬라이드를 중심으로 앞뒤 슬라이드가 50%씩 나눠보이기 때문에 의도대로 적용되지 않는다. `centeredSlides: false` 로 재할당해주면 `첫 번째 슬라이드(100%) - 두 번째 슬라이드 (100%)` 로 잘 보이게 된다.  
<br>

### **CSS 설정하기**
swiper의 크기와 추가적인 커스텀 css를 설정하면 된다.
``` css
.swiper {
  width: 600px;
  height: 300px;
}
```  
<br>

### **- 끝 -**