---
layout: post
title: 블로그 도메인 연결하기
subtitle: GitBlog 제작기
date: 2021-11-01
author: Areum-Jung
---  

### **Custom Domain 연결**

완성된 깃 블로그에 개인 도메인을 연결하고자 한다. 선택 사항이지만, 사소한 것에서 오는 성의와 개발자로서 개인 도메인을 하나 가지고 있으면 좋다하여 진행하게 되었다.  
<br>  

### **Step 01. 도메인구매**

도메인을 구매할 수 있는 국내외의 다양한 도메인 업체들이 존재한다. 그 중 저렴하기도 하고 주변에서 추천 받았던 [porkbun](https://porkbun.com/)에서 진행하였다.

결정한 도메인은 .com 으로 1년에 9.13$, 한화로 약 11,000원 정도에 이용 가능하다. 

(! 기간이 만료되기 전에 갱신하는 것이 좋으며, 갱신을 원치 않으면  Git pages의 Custom domain에서 remove 를 해주어야지 접속 오류를 방지할 수 있다.)  
<br>

### **Step 02. 도메인 DNS 연결**

porkbun 사이트를 기준으로 `Login` → `Account` → `Domain Management` → 원하는 도메인의 `Details` → `DNS Records` 로 접속하면 된다.

1. 스크롤 다운해서 내려오면 Current Records 목록이 나오며, 여기서 필요없거나 새로 설정해야할 DNS와 중복되는 목록은 삭제해준다. 

    (! 뒤에서 CNAME과 A 타입 두가지를 새로 연결할 거라 목록에 존재한다면 설정 오류가 뜨기 때문에 미리 삭제해두는 것이 좋음.)

2. 첫 번째로, CNAME 레코드를 등록할 것이다.
![domain1](https://user-images.githubusercontent.com/78872071/147582386-fc872d3d-80d9-4d08-bcff-98167d857ffd.png)


        💡 Type : CNAME  
             Host : www  
             Answer : 연결하려는 깃허브 주소



    위 형식과 맞춰 작성 후 `add`를 하면 된다. CNAME 타입은 `www.` 으로 접속하는 경우를 위한 하위 도메인? 작업이다.  
<br>  

3. 두 번째로, A 레코드를 등록할 것이다.  
![domain2](https://user-images.githubusercontent.com/78872071/147582388-cf81b9bd-1467-4cfb-848c-abce06097772.png)
    
    
        💡 Type : A  
             Answer : 185.199.108.153  
                            185.199.109.153  
                            185.199.110.153  
                            185.199.111.153  
             (위 Github Pages IP 주소 중 하나만 등록해도 되나, 전체를 다 등록해주는 것이 안전하다고 함. 본인은 하나만 등록함.)
    
    
    위 형식과 맞춰 작성 후 `add`를 하면 된다. A 타입은 메인 도메인? 작업이다.  
<br>

### **Step 03. GitHub 설정**

해당 Git Repository 의 Setting → Pages 설정에 들어간다.  

![domain3](https://user-images.githubusercontent.com/78872071/147582389-4ffb8752-6884-4802-9515-150fa364fdec.png)

Custom Domain 란에 연결할 도메인을 작성해주고 `Save` 를 클릭하여 연결을 기다린다. (20-30초 정도 소요)  
도메인이 연결되었다면 활성화된 `Enforce HTTPS` 을 클릭해준다.  
<br>

### **Step 04. 페이지 접속**

[areumyy.com](http://areumyy.com) 으로 접속  

![blog1](https://user-images.githubusercontent.com/78872071/147584050-5b703155-0ff8-4249-a8d2-7994205b1dcf.jpg)

[www.areumyy.com](http://www.areumyy.com) 으로도 접속이 잘 되었으며, https 설정도 제대로 되었다.  

![blog2](https://user-images.githubusercontent.com/78872071/147584045-18aa1ec5-7ec0-4eaa-a0a4-6ea2e1d9b3d5.jpg)  

<br>

### **- 끝 -** 