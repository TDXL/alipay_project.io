/*
 功能：动画
 参数：
 node 运动谁？  节点对象  必填
 targetValue   目标值   必填
 callback  一个物体运动完之后要执行的代码  函数 可选
 */
function animate(node,targetValue,callback){
  if(node.flag){
    clearInterval(node.flag);
  }
  node.flag = setInterval(function(){
    var currentValue = node.offsetLeft;
    var step = (targetValue-currentValue)/20;
    if(step>0){
      step = Math.ceil(step);
    }else if(step<0){
      step = Math.floor(step);
    }
    if(currentValue==targetValue){
      clearInterval(node.flag);
      if(callback!=undefined){
        callback();
      }
      return;
    }
    node.style.left = currentValue + step + 'px';
  },10);
}
