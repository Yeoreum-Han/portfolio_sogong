$(function(){
    $(window).scroll(function(){
       let scrollTopval = $(this).scrollTop();
       if(scrollTopval >= 50 && scrollTopval < 100){
        $('.box2>ul>li').each(function(index){
            $(this).delay(index*500)
            .animate(
                {marginTop: '170px'},800
            ).animate(
                {marginTop:'100px'},800
            ).animate(
                {marginTop:'145px'},800
            );
        });
       } 
    });

});