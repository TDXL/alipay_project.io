/**
 * Created by jy on 2018/1/11.
 */
$(function(){

  $("#gSolvePlans").mouseenter(function(){
    $("#gPlans").show();
    $("#gSortPlan").find("li").eq(0).css({"color":"#19acf7","borderRightColor":"#19acf7"}).siblings().css({"color":"#fff","borderRightColor":"#444343"});
    $("#gBusiness").show().siblings().hide();
  })
  $("#gSolvePlans").mouseleave(function(){
    $("#gPlans").hide();

  });
  $("#gPlans").mouseenter(function(){
    $("#gPlans").show();
    $("#gSortPlan").find("li").eq(0).css("color","#19acf7").siblings().css("color","#fff");
    $("#gBusiness").show().siblings().hide();

  });
  $("#gPlans").mouseleave(function(){
    $("#gPlans").hide();

  });
//����������������Ч��
  $("#gSortPlan>ul>li").click(function(){
    $(this).css("color","#19acf7").siblings().css("color","#fff");
    $(this).css("borderRightColor","#19acf7").siblings().css("borderRightColor","#444343");
    var $index=$(this).index();
    $("#gDetails>ul").eq($index).show().siblings().hide();
  });
  $("#gDetails ul li").mouseenter(function(){
    $(this).css("backgroundColor","#19acf7").siblings().css("backgroundColor","#444343");
  });
  $("#gDetails ul li").mouseleave(function(){
    $(this).css("backgroundColor","#444343");
  });



//  ����tap���л�

//  1.��ȡ���е�li  ��ӵ���¼�

  $(".else_q>ul>li").on("click", function (e) {
    e.preventDefault();
    //2.��ȡ���li������
    var index = $(this).index();

    $(".foot_q").eq(index).addClass("active").siblings(".foot_q").removeClass("active");

  })
  $(".foot_q .foot_z").mouseenter(function(){
    //$(this).css("overflow","hiden");
    $(this).find("img").stop().animate({
      width: 351
    },1000);
  });
  $(".foot_q .foot_z").mouseleave(function(){
    $(".foot_q img").stop().animate({
      width: 341
    },1000);
  });

});
