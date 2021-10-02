---
layout: project
title: Todo-List
date: 2021-09-23
author: Areum-Jung
---


# **Project Todo-List**

<br>

<img width="370" alt="TodoList" src="https://user-images.githubusercontent.com/78872071/135571859-726338e7-81f2-4e49-949d-8609de495c87.PNG">

<br>

#### **Stacks**

    HTML5 / CSS3 / JavaScript

#### **Team**
  
    1명

#### **Period**

    21/09/02 - 21/09/06

<br>

---

## **프로젝트 소개**  
<br>
HTML / CSS / JavaScript 를 활용한 To-Do list를 제작하였다. 

요구사항을 4단계로 나누어 필수기능 부터 추가기능까지 체계적으로 완성도를 높여나갔으며, 해당 기능에 필요한 코드를 생각하며 구현과정을 문서로 기록해두었다.

To-Do List 제작기에 대한 기록은 아래 노션 사이트에서 확인이 가능하다.  

<br>

[Link : [Notion](https://www.notion.so/TODO-LIST-e8ab80892d24432b996d141c90b36c86 "Todo-List")]

 [Link : [Git](https://github.com/areumyy/JS-Study "Todo-List") ]

<br>

---
## **페이지별 요구기능**  
<br>

1. **리스트 작성** - Enter키와 추가(+)버튼을 통한 이벤트 실행 (※ 내용 미 입력 시 경고 메시지 출력)  

2. **리스트 체크** -  체크박스 또는 텍스트(라벨) 클릭 시 체크선 속성 적용  

3. **리스트 삭제 / 전체 삭제** - 리스트 별 x버튼과 전체 삭제 버튼 생성  

4. **전체/진행 중/완료 별 리스트 조회와 개수 보여주기** - 조회항목 별 버튼 생성하여 현재 개수 표시

<br>

---
## **데모 이미지**  
<br>

#### **기본화면**

![기본화면](https://user-images.githubusercontent.com/78872071/135576368-a5cb47c8-169a-47ff-8f99-aa7ab54127c2.png)
*기본화면*

    ο 진행 과정(전체/진행중/완료) 별로 조회가 성가능하도록 버튼을 생하였고, 사용자에게 버튼 기능을 인지시켜주기 위해 hover시 border값을 굵게 변경해주었다.  

    ο 전체삭제 클릭 시 보여지는 화면이기도 하다.

<br>

#### **전체조회**

<img width="469" alt="전체조회" src="https://user-images.githubusercontent.com/78872071/135576339-973c9f03-e58b-4c95-bc0d-790ebd91b3e3.png">
*전체조회*

    ο 진행중/완료 리스트를 포함한 전체 리스트가 보여진다.  

    ο 리스트 작성 시 텍스트가 입력되지 않은 채로 추가가 된다면 '*내용을 입력해주세요' 의 경고 메시지를 띄어주었다.  

    ο 리스트 공간에서는 스크롤 기능이 가능하며 스크롤은 보이지 않게 숨겨주었다.  

    ο 완료된 리스트에는 체크박스 표시와 텍스트 부분에  취소선이 적용된다.  

    ο 리스트의 개별 삭제가 가능하도록 오른쪽에 삭제(x) 버튼을 생성하였다.

<br>

#### **진행 중 조회**
<img width="468" alt="진행중조회" src="https://user-images.githubusercontent.com/78872071/135576340-aa24ed02-425b-415c-b427-615fee128f90.png">
*진행 중 조회*

    ο 진행 중인 리스트만 조회가 가능하다

<br>

#### **완료 조회**
<img width="466" alt="완료조회" src="https://user-images.githubusercontent.com/78872071/135576335-6eb0482e-3abf-4256-86b6-f3f0e005eaff.png">
*완료조회*  

    ο 완료된 리스트만 조회가 가능하다

<br>

#### **전체선택**
<img width="467" alt="전체선택" src="https://user-images.githubusercontent.com/78872071/135576338-726f4264-660f-4adb-b03a-00bd6000291c.png">
*전체선택*

    ο 전체선택을 클릭하게 되면 모든 리스트에 체크 속성과 취소선 속성이 적용되고, 조회 별 리스트 개수가 업데이트 된다.  
    
    ο 전체선택을 해제하게 되면 모든  리스트들도 체크 속성이 해제되고, 리스트 개수가 업데이트 된다.  

    ο 전체삭제 클릭 시 기본화면으로 돌아가게 된다.