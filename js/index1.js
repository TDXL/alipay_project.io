/**
 * Created by 田冬雪 on 2018-01-11.
 */
$(document).ready(function(){
  //客户服务下拉盒子
  $(".top_head_r_t>li:first-child>a").mouseenter(function(){
    $(".top_head_r_more_t").show();
    $("a>img").removeClass().addClass("up");
  });
  $(".top_head_r_t>li:first-child").mouseleave(function(){
    $(".top_head_r_more_t").hide();
    $("a>img").removeClass().addClass("down");
  });
  //添加背景图
  for(var i = 0;i<6;i++){
    $(".index"+ i +"_t").css("backgroundImage","url('../images/zfb01-"+i+"-1.jpg')");
  }
  //第一页index0 视频播放完成后 切换背景图
  $(window).load(function(){
    var $videoBox= $("#index0_video_t");
    var $vPlay = $("#video_play_t");
    var $video = $("video");
    var video = document.getElementsByTagName('video')[0];
    var $videoNum = setTimeout(function(){
      $videoBox.css("display","none");
      //$video.autoplay("false").loop("false");
      video.autoplay = 'false';
      video.loop = 'false';
      $vPlay.css("display","block");
    },23500);
    $vPlay.click(function(){
      $vPlay.css("display","none");
      $videoBox.css("display","block");
      console.log($video);
      //$video.autoplay("true").loop("true");
      video.autoplay = 'true';
      video.loop = 'true';
      //$video.play();
      clearTimeout($videoNum);
      $videoNum = setTimeout(function(){
        $videoBox.css("display","none");
        //$video.autoplay("false").loop("false");
        video.autoplay = 'false';
        video.loop = 'false';
        $vPlay.css("display","block");
      },22000);
    })
  });


  //右侧圆点操作切换
  var $controlLis = $(".index_control_t>li");

  var $indexBox = $(".wrap_t");
  var $index1Animate = function(){
    $(".index1_t .words_t").fadeIn(1000,function(){
      $(".index1_t").animate({
        backgroundSize: "100%"
      },2000,"linear");
    });
  };
  var $index2Animate = function(){
    $(".index2_t .showewm_t").animate({
      width: "1300px",
      top: "300px",
      left: "17%"
    },500,"linear",function(){
      $(".index2_t .readewm_t").animate({
        width: "420px",
        top: "-100px",
        left: "7%"
      },500,"linear",function(){
        $(".index2_t .words_t").fadeIn(1000);
      });
    });
  };
  var $index3Animate = function(){
    $(".index3_t").animate({
      backgroundSize: "110%"
    },3000,"linear");
    $(".index3_t img.words_t").fadeIn(2000);
  };
  var $index4Animate = function(){
    $(".index4_t img.words_t").fadeIn(2000,function(){
      $(".index4_t .index4_bg").fadeIn(1000);
    });
  };
  var $index5Animate = function(){
    $(".index5_t img.words_t").fadeIn(2000);
    $(".index5_t").animate({
      backgroundSize: "100%"
    },6000,"linear");
  };
  var $allIndexAnimate = function(index){
    (index > 0) && $(".top_nav_t .fr_t").show();
    (index === 0) && $(".top_nav_t .fr_t").hide();
    (index === 1) && $index1Animate();
    (index === 2) && $index2Animate();
    (index === 3) && $index3Animate();
    (index === 4) && $index4Animate();
    (index === 5) && $index5Animate();
  };
  //点击圆点
  $controlLis.click(function(){
    var index = $(this).index();
    var $height = parseInt($(".wrap_t>.index_t").css("height"));
    //改变类名
    $(this).addClass("active").siblings().removeClass("active");
    index<6 && $("#index_xjt").show();
    index === 6 && $("#index_xjt").hide();
    //移动index盒子
    $indexBox.animate({
      top:$height * (- index)
    },function(){
      $allIndexAnimate(index);
    });
  });
  //点击屏幕下箭头
  var count = 0;
  $("#index_xjt").click(function(){
    var $height = parseInt($(".wrap_t>.index_t").css("height"));
    for(var i = 0;i<$controlLis.length;i++){
//          console.log($controlLis[i]);
      if($controlLis[i].className == 'active'){
        var index = i;
      }
    }
    count = index+1;
    count < 6 && $("#index_xjt").show();
    count === 6 && $("#index_xjt").hide();
    $controlLis.eq(count).addClass("active").siblings().removeClass("active");
    $indexBox.animate({
      top:$height * (- count)
    },function(){
      $allIndexAnimate(count);
    });
  })
});