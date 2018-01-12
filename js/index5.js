$(document).ready(function(){
                   $('.headerc_left>ul>li').mouseenter(function(){
                         $(this).children('ul').show();
                   })
                   .mouseleave(function(){
                         $(this).children('ul').hide();
                   });
             });
             $(document).ready(function(){
                 $('.headerc_right>ul>li').mouseenter(function(){
                     $(this).children('ul').show();
                 })
                         .mouseleave(function(){
                             $(this).children('ul').hide();
                         });
             });
    $(function(){

   
    var count = 0;//默认为0，表示第一个li显示

    


    var $lis = $(".imgc");//所有li
    
    //1 设置右按钮操作
    $(".arrow-right").click(function(){
      count++;


      if(count===$lis.length){
        count=0;
      }
      $lis.eq(count).stop().fadeIn(500).siblings().stop().fadeOut(500);
    });

    //2 设置左按钮操作
    $(".arrow-left").click(function(){
      count--;
      (count<0)&&(count = $lis.length-1);
      $lis.eq(count).stop().fadeIn(500).siblings().stop().fadeOut(500);
    });

    // 自动轮播
   var Time = setInterval(function(){
        (++count===$lis.length)&&(count=0);
         console.log( count);
           $lis.eq(count).stop().fadeIn(500).siblings().stop().fadeOut(500);
    },4000);
     $('#bg').mouseenter(function(){
           clearInterval(Time);
      })
     .mouseleave(function(){
        Time = setInterval(function(){
        (++count===$lis.length)&&(count=0);
         console.log( count);
           $lis.eq(count).stop().fadeIn(500).siblings().stop().fadeOut(500);
    },4000);
     })
  })
  

    $(function(){
       $('.lifather').mouseenter(function(){
        $(this).children('.lison').stop().animate({top:'-108px'},200)
        $(this).children('.contentc_lifirst').css('opacity','1').stop().animate({top:'40px'},200)    
       })
       $('.lifather').mouseleave(function(){
        $(this).children('.lison').stop().animate({top:'0px'},200) 
        $(this).children('.contentc_lifirst').css('opacity','0').stop().animate({top:'164px'},200) 
       })
    
    });