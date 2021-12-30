---
layout: post
title: '[JQuery] 특정요소를 제외한 선택자 찾기'
subtitle: JQuery 파헤치기
date: 2021-11-30
author: Areum-Jung
---  

### **특정 요소를 제외한 선택자 가져오기**  
특정 요소(선택자)를 제외한 요소 가져오는 코드가 필요했다. 찾아보니 해당 경우에는 jQurey를 이용한 방법들의 추천이 많았다. 결국 javascript 코드에 jQurey를 더하여 해결하였다.  

<br>  

### **해결**  

* 특정 선택자를 제외한 선택자 가져오기(찾기) ⇒ `제외할 선택자.not($(this))`
* 해당 선택자 안에서 태그(원하는 선택자) 찾기 ⇒ `.find('.선택자') or .find('태그명')`
* CSS 추가 ⇒ `.css('속성', '값')`

<br> 

깃 블로그에서 세 개의 Info 아이콘을 클릭하면 동시에 하나의 아이콘만 펼쳐지는 효과를 넣고싶었다. 

**변경 전 >**
![slider 변경전](https://user-images.githubusercontent.com/78872071/147539549-64556ed0-19f5-456d-b646-21ddc017058c.png)
*세 개 모두 펼칠 수 있음*

**변경 후 >**  
![slider 변경후](https://user-images.githubusercontent.com/78872071/147539551-80fe8333-46a4-4db3-b289-3fe3117fb9b2.png)
*클릭한 아이콘을 제외하고 모두 접힘*

JQurey를 적용하여 클릭한 선택자를 가져와 해당 선택자를 제외한 모든 선택자를 찾아 숨겨주어, 하나만 펼쳐질 수 있도록 변경하였다.  

<br>  

```javascript
let contEls = document.querySelectorAll('.contact')
let infoEls = document.querySelectorAll('.contact_info')
let itemli = $('.contact');
let itemInfo = $('.contact_info');

contEls.forEach((contEl, index) => contEl.addEventListener('click', function(){

	if(contEl.classList.contains('selected')) {
		contEl.classList.remove('selected');
		infoEls[index].style.display = 'none';
	} else {
		contEl.classList.add('selected');
		infoEls[index].style.display = 'block';
		// jQurey 적용 -> 클릭된 선택자 이외의 요소를 숨겨주는 코드
		itemli.click(function () {
			itemli.not($(this)).removeClass('selected');
			itemli.not($(this)).find('.contact_info').css('display', 'none');
		});
	}
	
}))
```