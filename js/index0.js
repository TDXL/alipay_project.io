$(function(){
      //轮播图
      var $lis = $('.q_bg>ul>li');
      var count = 0;
      setInterval(function(){
            (++count === $lis.length) && (count = 0);
            $lis.eq(count).stop().fadeIn(2000).siblings().stop().fadeOut(2000);

      },4000);
      //中心第二个盒子
      var $li2 = $('#q_li2');
   
      $li2.mouseenter(function(){
            $(this).children('ul').show().stop().animate({
                  height:105,top:-78
            },200,'linear');
      }).mouseleave(function(){
            $(this).children('ul').stop().animate({
                  height:52,top:-52
            },200,'linear',function(){
                  $(this).hide();
            });

      })
         
      //底部精灵图
      var $lis2 = $('.f_b>ul>li>a');
    
      $lis2.mouseenter(function(){
            $(this).addClass('active');
      });
      $lis2.mouseleave(function(){
            $(this).removeClass('active');
      });
})
