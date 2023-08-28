$(function(){
    $(window).scroll(function(){
       let scrollTopval = $(this).scrollTop();
       if(scrollTopval >= 40 && scrollTopval < 100){
        $('.box2>ul>li').each(function(index){
            $(this).delay(index*300)
            .animate(
                {marginTop: '25vh'},800
            ).animate(
                {marginTop:'21vh'},800
            ).animate(
                {marginTop:'23vh'},800
            );
        });
       } 
    });

});