$(function(){
    $(".sub, .sub_bg").hide();

    $(".menu>li:eq(1)").mouseover(function () {
      $(".sub, .sub_bg").stop().slideDown();
    });
    $(".menu>li:eq(1)").mouseout(function () {
      $(".sub, .sub_bg").stop().slideUp();
    });
  
});