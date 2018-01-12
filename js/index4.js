$(function(){

	$(".tmh").mouseenter(function(){
		$(".two_menuh").slideDown(500);

	});

	$('.tmh').mouseleave(function(){
		$(".two_menuh").slideUp(500);
	});

	$(".tmh2").mouseenter(function(){
		$(".two_menuh2").slideDown(500);
	});

	$('.tmh2').mouseleave(function(){
		$(".two_menuh2").slideUp(500);
	});

	$(".tmh3").mouseenter(function(){
		$(".two_menuh3").slideDown(500);
	});

	$('.tmh3').mouseleave(function(){
		$(".two_menuh3").slideUp(500);
	});

	$(".fa_lh").mouseenter(function(){
		$(".fa_ljsh").stop().show(500);
	});

	$(".fa_lh").mouseleave(function(){
		$(".fa_ljsh").stop().hide(500);
	});

	$(".fa_ch").mouseenter(function(){
		$(".fa_cjsh").stop().show(500);
	});

	$(".fa_ch").mouseleave(function(){
		$(".fa_cjsh").stop().hide(500);
	});

	$(".fa_rh").mouseenter(function(){
		$(".fa_rjsh").stop().show(500);
	});

	$(".fa_rh").mouseleave(function(){
		$(".fa_rjsh").stop().hide(500);
	});

	$(".zb_lih1").mouseenter(function(){
		$(".zb_jsh").stop().animate({
			"left":'0'
		},500);
	});

	$(".zb_lih1").mouseleave(function(){
		$(".zb_jsh").stop().animate({
			"left":'-307px'
		},0);
	});

	$(".zb_lih2").mouseenter(function(){
		$(".zb_jsh2").stop().animate({
			"left":'0'
		},500);
	});

	$(".zb_lih2").mouseleave(function(){
		$(".zb_jsh2").stop().animate({
			"left":'-307px'
		},0);
	});

	$(".zb_lih3").mouseenter(function(){
		$(".zb_jsh3").stop().animate({
			"left":'0'
		},500);
	});

	$(".zb_lih3").mouseleave(function(){
		$(".zb_jsh3").stop().animate({
			"left":'-307px'
		},0);
	});

	$(".zb_lih4").mouseenter(function(){
		$(".zb_jsh4").stop().animate({
			"left":'0'
		},500);
	});

	$(".zb_lih4").mouseleave(function(){
		$(".zb_jsh4").stop().animate({
			"left":'-307px'
		},0);
	});

	$(".zb_lih5").mouseenter(function(){
		$(".zb_jsh5").stop().animate({
			"left":'0'
		},500);
	});

	$(".zb_lih5").mouseleave(function(){
		$(".zb_jsh5").stop().animate({
			"left":'-307px'
		},0);
	});


	$(".zb_lih6").mouseenter(function(){
		$(".zb_jsh6").stop().animate({
			"left":'0'
		},500);
	});

	$(".zb_lih6").mouseleave(function(){
		$(".zb_jsh6").stop().animate({
			"left":'-307px'
		},0);
	});

	$(".zb_lih7").mouseenter(function(){
		$(".zb_jsh7").stop().animate({
			"left":'0'
		},500);
	});

	$(".zb_lih7").mouseleave(function(){
		$(".zb_jsh7").stop().animate({
			"left":'-307px'
		},0);
	});

	$(".zb_lih8").mouseenter(function(){
		$(".zb_jsh8").stop().animate({
			"left":'0'
		},500);
	});

	$(".zb_lih8").mouseleave(function(){
		$(".zb_jsh8").stop().animate({
			"left":'-307px'
		},0);
	});

	$(".tmh4").click(function(){
		$(this).hide();
		$(".tmh5").fadeIn(200);
	});

	$(".tmh5").dblclick(function(){
		$(this).hide();
		$(".tmh4").fadeIn(200);
	});

	  var $lis = $('.ban_imgh>ul>li');
      var $control = $('.ban_imgh>.controlh>span');
      var $slider =  $('.ban_texth');
      var count2 = $control.index() ; 
      var count = 0;
      var flag;
      //自动轮播
      function autoPlay(){
            flag = setInterval(function(){
            	count++;
            (count === $lis.length) && (count = 0);
            //圆点变化
            $control.eq(count).addClass('activeh').siblings().removeClass('activeh');
            //图片变化
            $lis.eq(count).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
            },3000);
      }
      autoPlay();
       
      // 控制钮
      $control.click(function(){
             $control.eq($(this).index()).addClass('activeh').siblings().removeClass('activeh');
			 $lis.eq($(this).index()).fadeIn(1000).siblings().stop().fadeOut(1000);
				count = $(this).index();
				//console.log(count);
      });
      //移入停止
      $slider.mouseenter(function(){
            clearInterval(flag);
      })
      $slider.mouseleave(function(){
            autoPlay();  
      });
});



//<><><><><><><<>