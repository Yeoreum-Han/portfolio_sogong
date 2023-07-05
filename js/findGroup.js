$(function () {

  //마우스오버시
  $('.mainCategory>ul>li>a').mouseover(function () {
    $(this).css({
      fontWeight : 'bold',
    });
  });
  $('.mainCategory>ul>li>a').mouseout(function () {
    $(this).css({
      fontWeight : 'normal',
    });
  });

    //탭메뉴
    $('.mainCategory>ul>li').click(function() {
      var idx = $(this).index();
      $(".mainCategory>ul>li>a").removeClass("now");
      $(".mainCategory>ul>li>a").eq(idx).addClass("now");
      $(".subCategory > ul").hide();
      $(".subCategory > ul").eq(idx).show();
      $(".sec3 > div").hide();
      $(".sec3 > div").eq(idx).show();
      $(".groups>li:nth-child(n+7)").hide();
    });

  // 서브카테고리 클릭시
  $('.subC_first>li').click(function(){
    var idx = $(this).index();
    if($('.subC_first>li>a').eq(idx).hasClass("active")){
      $('.subC_first>li>a').removeClass("active");
    } else {
      $('.subCategory>ul>li>a').removeClass("active");
      $('.subC_first>li>a').eq(idx).addClass("active");
    }
  });
  $('.subC_second>li').click(function(){
    var idx = $(this).index();
    if($('.subC_second>li>a').eq(idx).hasClass("active")){
      $('.subC_second>li>a').removeClass("active");
    } else {
      $('.subCategory>ul>li>a').removeClass("active");
      $('.subC_second>li>a').eq(idx).addClass("active");
    }
  });
  $('.subC_third>li').click(function(){
    var idx = $(this).index();
    if($('.subC_third>li>a').eq(idx).hasClass("active")){
      $('.subC_third>li>a').removeClass("active");
    } else {
      $('.subCategory>ul>li>a').removeClass("active");
      $('.subC_third>li>a').eq(idx).addClass("active");
    }
  });


  $('.plus>button').mouseover(function () {
    $(this).css({
      backgroundColor:'#333',
      color:'#fff'
    });
  });
  $('.plus>button').mouseout(function () {
    $(this).css({
      backgroundColor:'#fff',
      color:'#333'
    });
  });

  // 이미지넣기
  for(let i=1; i<=$("li[class^='groupImg']").length; i++){
    $('.groupImg'+i+'>a').css({
      background : 'url(./css/images/groupimg'+i+'_resize430.png) no-repeat 0 0'
    });
  };

  $(".subCategory > ul").hide();
  $(".subCategory > ul:eq(0)").show();

  $(".sec3 > div").hide();
  $(".sec3>div:eq(0)").show();

  // 더보기버튼
  $('.groups>li:nth-child(n+7)').hide();
  $('.plus>button').click(function(){
    imgplus();
  });
});

function imgplus () {
  number = $('.groups>li:visible').length;
  number = Math.floor(number/3) * 3;
  if(number> $('.groups>li').length + 1) return false;
  else {
    $('.groups>li').hide();
    $(".groups>li:nth-child(-n+" + (number + 6) + ")").show(); 
  }
  return false;
};