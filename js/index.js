$(function () {
  // sec2 요소들 숨기기
  $(".img2").css({
    left: "50px",
    opacity: "0",
  });
  $(".text2").css({
    left:'1920px',
    opacity: "0",
  });

  // sec3 텍스트 숨기기
  $(".wrap").css({
    opacity: "0",
  });
  $(".text3").css({
    marginTop: "0px",
    opacity: "0",
  });

  // sec4 텍스트 숨기기
  $(".text4 *").css({
    opacity: "0",
  });

//스크롤에 따라 요소들 나타나기
  $(window).scroll(function () {
    let scrollTopval = $(this).scrollTop();
    if (scrollTopval >0 && scrollTopval < 1000) {
      $(".img2").animate(
        {
          left: "200px",
          opacity: "1",
        },
        800
      );
      $(".text2").animate(
        {
          left: "1070px",
          opacity: "1",
        },
        900
      );
    } else if (scrollTopval >= 1000 && scrollTopval < 1100) {
      $(".text3").stop().animate(
        {
          marginTop: "100px",
          opacity: "1",
        },
        500
      );
    } else if (scrollTopval >= 1100 && scrollTopval < 1800) {
      $(".wrap").animate({ opacity: "1" }, 1000);
    } else if ( scrollTopval >=1800){
    
      $('.text4>h2').animate({
        color:'#333',
        opacity: '1'
      },800);
      $('.text4>p:eq(0)').animate({
        color:'#333',
        opacity:'1'
      },1000);
      $('.text4>p:eq(1)').animate({
        color:'#333',
        opacity:'1'
      },1200);
      $('.text4>p:eq(2)').animate({
        color:'#333',
        opacity:'1'
      },1400);
      $('.text4>p:eq(3)').animate({
        color:'#333',
        opacity:'1'
      },1600);
      $('.text4>p:eq(4)').animate({
        color:'#333',
        opacity:'1'
      },1800);
    }

  });

});


