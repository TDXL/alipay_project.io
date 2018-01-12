$(function(){
       //鼠标悬停显示隐藏帮助中心小盒子
       var $gHelpCenter=$("#gHelpCenter"),
           $gHelpService=$("#gHelpService");
       $gHelpCenter.mouseenter(function(){
           $gHelpService.show();
       });
       $gHelpCenter.mouseleave(function(){
           $gHelpService.hide();
       });
       $gHelpService.mouseenter(function(){
           $gHelpService.show();
       });
       $gHelpService.mouseleave(function(){
           $gHelpService.hide();
       });
       //鼠标点击固定定位的小盒子 显示说明 隐藏整个盒子
$("#gClose").mouseenter(function(){
    $("#gCloseDiv").show();
});
$("#gClose").mouseleave(function(){
    $("#gCloseDiv").hide();
});
       $("#gClose").click(function(){
           $("#gContactMe").hide();
       });
       //解决方案悬停隐藏效果
      $("#gSolvePlans").mouseenter(function(){
          $("#gPlans").show();
          $("#gSortPlan").find("li").eq(0).css("color","#19acf7").siblings().css("color","#fff");
          $("#gBusiness").show().siblings().hide();
      })
       $("#gSolvePlans").mouseleave(function(){
           $("#gPlans").hide();

       });
       $("#gPlans").mouseenter(function(){
           $("#gPlans").show();
           $("#gSortPlan").find("li").eq(0).css({"color":"#19acf7","borderRightColor":"#19acf7"}).siblings().css({"color":"#fff","borderRightColor":"#444343"});
           $("#gBusiness").show().siblings().hide();

       });
       $("#gPlans").mouseleave(function(){
           $("#gPlans").hide();

       });
       //解决方案点击左侧分栏效果
       $("#gSortPlan>ul>li").click(function(){
               $(this).css("color","#19acf7").siblings().css("color","#fff");
               $(this).css("borderRightColor","#19acf7").siblings().css("borderRightColor","#444343");
               var $index=$(this).index();
               $("#gDetails>ul").eq($index).show().siblings().hide();
           });
       $("#gDetails ul li").mouseenter(function(){
           $(this).css("backgroundColor","#19acf7").siblings().css("backgroundColor","#444343");
           $(this).children("p").attr("color","#fff");
       });
       $("#gDetails ul li").mouseleave(function(){
           $(this).css("backgroundColor","#444343");
       });

      //点击ul下的li
       var gBanner = document.getElementById('gBanner');
       var gContent = document.getElementById('gContent');
       var gUl = document.getElementById('gUl');
       var lis = gUl.children;
       var gCount = 0, gTemp;
       var gLock = true;

       for (var i = 0; i < lis.length; i++) {
           lis[i].index = i;
       }
       for (var i = 0; i < lis.length; i++) {
           lis[i].onclick = function () {
               if (gLock) {
                   gLock = false;
                   gCount = this.index;
                   gTemp = gCount;
                   var targetValue = gCount * -document.body.offsetWidth;
                   animate(gContent, targetValue, function () {
                       gLock = true;
                   })
               }
               for (var i = 0; i < lis.length; i++) {
                   lis[i].className = '';
               }
               lis[gTemp].className = 'active';
           }
       };
    var flag=true;
$("#gSpirit>img").click(function(){
    if(flag){
        $(this).css({
            left:"-200px",top:"-200px"});
        flag=false;
        $("#gAccount").show().prev().hide();
    }else{
        $(this).css({
            left:"-260px",top:"-260px"});
        flag=true;
        $("#gAccount").hide().prev().show();

    }
})
    //动画
       var gTag;
       function gAutoPlay() {
           gTag = setInterval(function () {
               if (gLock) {
                   gLock = false;
                   gCount++;
                   gTemp = gCount;
                   var targetValue = gCount * -1349;
                   animate(gContent, targetValue, function () {
                       if (gCount == 5) {
                           gContent.style.left = 0;
                           gCount = 0;
                       }
                       gLock = true;
                   });
               }
               if (gTemp == 5) gTemp = 0;
               for (var i = 0; i < lis.length; i++) {
                   lis[i].className = '';
               }
               lis[gTemp].className = 'active';
           }, 2000);
       }
       gAutoPlay();

       //鼠标悬停gBanner清除定时器
       gBanner.onmouseenter = function () {
           clearInterval(gTag);
       }
//鼠标离开gBanner设置定时器
       gBanner.onmouseleave = function () {
           gAutoPlay();
       }

       //支付方式动画效果
    $("#gPayWay>li").mouseenter(function(){
        $(this).children("img").stop().animate({width:"60px",top:"27px",left:"70px"},200);
        $(this).children("h4").stop().animate({bottom:"115px"},200);
        $(this).children("p").stop().animate({top:"135px"},200);
        $(this).children("span").stop().animate({bottom:"18px"},200);
    });
    $("#gPayWay>li").mouseleave(function(){
        $(this).children("img").stop().animate({width:"100px",top:"30px",left:"49px"},200);
        $(this).children("h4").stop().animate({bottom:"60px"},200);
        $(this).children("p").stop().animate({top:"190px"},200);
        $(this).children("span").stop().animate({bottom:"-54px"},200);
    });
});

















