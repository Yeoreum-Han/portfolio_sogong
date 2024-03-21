# 소공소공   

## 소개
![sogong_intro](https://github.com/Yeoreum-Han/portfolio_sogong/assets/127937169/944f4182-91e9-4618-a721-ff610e291eff)
소소한 취미를 공유한다. [**소공소공**](링크)은 적은 인원이거나 작은 취미를 위한 소모임 사이트입니다.   
취미, 스터디, 친목으로 분류하여 사용자가 자신의 목적에 따라 모임을 찾아볼 수 있게 했습니다.   
이달의 모임 페이지에서는 매달 잘 운영되고 있는 모임을 선정하고 소개하여 활발한 모임활동을 장려합니다. 

## 기술스택
* html5
* css3
* js
* jQuery

## 핵심기능
**1. 카테고리별 탭**   
![sogong_mainCategory](https://github.com/Yeoreum-Han/courseFiles/assets/127937169/c306ff81-5d8f-4794-bd55-b58479f7208c)   
메인 - 서브 - div를 동일한 구조로 작성해서 탭마다 다른 내용을 보여주도록 했다.   
메인카테고리인 취미/스터디/친목 을 클릭하면 클릭된 a에 now 클래스를 부여하고 index값이 같은 div를 show한다.
```js
    //메인카테고리를 클릭하면
    $('.mainCategory>ul>li').click(function() {
      var idx = $(this).index();   /* 클릭된 li의 index값 확인 */
      $(".mainCategory>ul>li>a").removeClass("now"); /* now 클래스 지워서 초기화하고*/
      $(".mainCategory>ul>li>a").eq(idx).addClass("now"); /* idx값이 같은 a에 now 클래스 부여 */
      $(".sec3 > div").hide();  /* div 전체를 hide하고*/
      $(".sec3 > div").eq(idx).show(); /* idx값이 같은 div만 show */
      $(".groups>li:nth-child(n+7)").hide();
    });

```


**2. 더보기**   
![sogong_moreButton](https://github.com/Yeoreum-Han/courseFiles/assets/127937169/f81b84a8-7345-4b92-9892-1657ae6c3780)
더보기 버튼을 클릭하면 새로운 그룹 6개를 추가로 볼 수 있게 했다. 
```js
/* 처음에는 6개만 보이도록. 7번째 li부터는 hide */
$('.groups>li:nth-child(n+7)').hide();
$('.plus>button').click(function(){
    imgplus();
});   
function imgplus () {
    number = $('.groups>li:visible').length; /* 현재 보여지는 li의 개수 */
    number = Math.floor(number/3) * 3;  /* 1줄에 3개씩 보이도록 */
    if(number> $('.groups>li').length + 1) return false; /*li최대개수보다 많아지면 종료*/
    else {
        $('.groups>li').hide();
        $(".groups>li:nth-child(-n+" + (number + 6) + ")").show(); /* 처음부터 number+6 까지 show */
    }
    return false;
};
```


## 트러블슈팅
**1. 서브카테고리 클릭**   
![md_sogong03](https://github.com/Yeoreum-Han/courseFiles/assets/127937169/5f77af54-09a8-45cc-a7d9-4ba1f975b9cf)
처음에 서브카테고리를 클릭하면 배경색이 바뀌도록 했더니 클릭한 서브카테고리 모두에 css를 적용할 수 있었다.   
하지만 배경색을 다시 원래대로 바꿀 수 없었고, 서브카테고리 단어들 중 하나에만 적용할 수 없는 문제가 있었다.   
이는 각각 **now클래스를 부여하는 방식**, **active 클래스 여부를 확인한 뒤 부여하거나 제거**하는 방식으로 해결했다.   

```js
    $('.subC_first>li').click(function(){   /* 서브카테고리를 클릭했을때 active 클래스를 부여하거나 제거한다. */
        var idx = $(this).index();
        if($('.subC_first>li>a').eq(idx).hasClass("active")){  /* active클래스는 서브카테고리 요소들중 하나만 가질수 있다. */
        $('.subC_first>li>a').removeClass("active");
        } else {
        $('.subCategory>ul>li>a').removeClass("active");
        $('.subC_first>li>a').eq(idx).addClass("active");
        }
    });
    
```
**2. 이미지 삽입**   
많은 데이터를 작성하고 이미지 삽입을 위해 글마다 동일한 코드를 반복적으로 쓰는 문제가 있었다.   
이를 해결하기 위해 **중복 코드를 for문으로 대체**했고 코드 길이도 줄이면서 효율성을 높일 수 있었다.   

```js
  for(let i=1; i<=$("li[class^='groupImg']").length; i++){  /* li와 이미지 순서를 동일하게 맞추고 for문으로 순환 */
    $('.groupImg'+i+'>a').css({                             /* li에 배경으로 이미지 넣음 */
      background : 'url(./css/images/groupimg'+i+'_resize430.png) no-repeat center/contain'
    });
  };
```
