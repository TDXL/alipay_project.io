window.onload = function(){
//var zlunbo = document.getElementById('zlunbo');
  var zimages = document.getElementById('zimages');
  var count = 30;
  setInterval(function(){
    //定义每段时间行走的长度
    var buchang = 20;
    //获取元素距左边父元素的距离
    var leftjvli = zimages.offsetLeft;
    //定义元素行走的总长度
    var zlength = 1300;
    //做出判断


    if(leftjvli===zlength){
      zimages.style.left = -300+buchang+'px';
      count++;
      if(count>34){
        count = 30;
      }
      zimages.src = '../images/z' + count + '.jpg';
    }else{
      zimages.style.left = leftjvli+buchang+'px';
    }
  },50);
  //alert("引用");

  //要做事先找人
  var wrap = document.getElementById("zlunbo2");
  var slide = document.getElementById("slide");
  var ul = slide.children[0];
  var lis = ul.children;
  var arrRight = document.getElementById("arrRight");
  var arrLeft = document.getElementById("arrLeft");

  var arrow = document.getElementById("arrow");
  var config = [//config 配置
    {
      height:150,
      width: 200,
      top: 20,
      left: 50,
      opacity: 0.2,
      zIndex: 2
    },//0
    {
      height:200,
      width: 300,
      top: 70,
      left: 0,
      opacity: 0.8,
      zIndex: 3
    },//1
    {
      height:250,
      width: 400,
      top: 100,
      left: 200,
      opacity: 1,
      zIndex: 4
    },//2
    {
      height:200,
      width: 300,
      top: 70,
      left: 500,
      opacity: 0.8,
      zIndex: 3
    },//3
    {
      height:150,
      width: 200,
      top: 20,
      left: 550,
      opacity: 0.2,
      zIndex: 2
    }//4
  ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

  //1.下面是鼠标进入盒子渐渐显示箭头,离开渐渐隐藏

  //进入大盒子显示箭头
  wrap.onmouseover = function(){
    animate(arrow,{'opacity':1});
  }
  //离开大盒子隐藏箭头
  wrap.onmouseout = function(){
    animate(arrow,{'opacity':0});
  }

  //2.根据配置单  对每一个li的位置进行分配
  function assign(){
    for(var i = 0; i < lis.length; i++){
      //实现图片渐渐的到达指定位置
      animate(lis[i],config[i],function(){
        flag = true;
      });
    }
  }

  assign();

//3.点击箭头让木马转起来
  arrRight.onclick = function () {
    if (flag) {//点击按钮的时候对阀门的状态进行判断 如果是打开的就可以执行
      flag = false;//关闭节流阀
      //点击右侧按钮 配置单 删除第一个元素 追加到结尾
      config.push(config.shift());//修改配置单
      assign();//根据修改完成的配置单对位置进行重新分配
    }
  }
  arrLeft.onclick = function () {
    if (flag) {
      flag = false;
      //点击左侧按钮 配置单 删除最后一个 追加到开头
      config.unshift(config.pop());//修改配置单
      assign();//根据修改完成的配置单对位置进行重新分配
    }
  }

//4.添加节流阀
  var flag = true;//flag为true的时候表示节流阀打开 箭头可以点击
}





