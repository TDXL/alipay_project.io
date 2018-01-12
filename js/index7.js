$(function(){
      var $lis = $('.q_slider>ul>li');
      var $contorl = $('.q_slider>.contorl>span');
      var $slider =  $('.q_slider');
      var count2 = $contorl.index() ; 
      var count = 0;
      var flag;
      //自动轮播
      function autoPlay(){
            flag = setInterval(function(){
            (++count === $lis.length) && (count = 0);
            //圆点变化
            $contorl.eq(count).addClass('active')
            .siblings().removeClass('active');
            //图片变化
            $lis.eq(count).stop().fadeIn(2000)
            .siblings().stop().fadeOut(2000);
            },4000);
      }
      autoPlay();
       
      // 控制钮
      $contorl.click(function(){
            $(this).eq(count2).addClass('active')
            .siblings().removeClass('active');
            $lis.eq($(this).index()).stop().fadeIn(1000)
            .siblings().stop().fadeOut(1000);
      });
      //移入停止
      $slider.mouseenter(function(){
            clearInterval(flag);
      })
      $slider.mouseleave(function(){
            autoPlay();  
      })  
      //我是商家
      var $lis2 = $('.banner_mid>ul>li');
      // 鼠标进入列表 出现阴影 盒子上浮 图片变大 文字背景变色
      $lis2.mouseenter(function(){
            $(this).css('boxShadow','0 20px 20px rgba(0,0,0,.06)')
            .stop().animate({top:-20},200,'linear')
            .children('.m_t').children('img').stop().animate({height:200,width:300},200,'linear')
            .parent().siblings().css('backgroundColor','#fff');

      })
      .mouseleave(function(){
            $(this).css('boxShadow','0 0 0 rgba(0,0,0,.06)')
            .stop().animate({top:0},200,'linear')
            .children('.m_t').children('img').stop().animate({height:180,width:290},200,'linear')
            .parent().siblings().css('backgroundColor','rgba(0,0,0,.06)');
      })
      // 导航右侧二维码
      var $svg = $('.q_nav>.navTop>.q2_w>ul>li');
      //鼠标移入移除显示二维码
      $svg.mouseenter(function(){
            $(this).children('.navtop_r').show();
      })
      $svg.mouseleave(function(){
            $(this).children('.navtop_r').hide();
      })
})
