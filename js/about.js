$(function(){
    $(window).scroll(function(){
       let scrollTopval = $(this).scrollTop();
       if(scrollTopval >= 40 && scrollTopval < 100){
        $('.box2>ul>li').each(function(index){
            $(this).delay(index*400)
            .animate(
                {marginTop: '9%'},800
            ).animate(
                {marginTop:'11%'},800
            ).animate(
                {marginTop:'13%'},800
            );
        });
       } 
    });

});