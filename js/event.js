$(function(){

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
    $('.mainCategory>ul>li>a').removeClass('now');
    $('.mainCategory>ul>li>a').eq(idx).addClass('now');
    $(".sec3 > div").hide();
    $(".sec3 > div").eq(idx).show();
  });
});