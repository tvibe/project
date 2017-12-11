/**用jQuery重写后的轮播
 * */
$(function () {//页面加载时调用
 var container = $('.slide-con-inner');
 var list = $('#list');
 var buttons = $('#buttons span');
 var prev = $('#prev');
 var next = $('#next');
 var index = 1;
 var len = 5;
 var interval = 3000;
 var timer;

 function animate (offset) {//动画效果
     var left = parseInt(list.css('left')) + offset;//目标值
     if (offset>0) {
      offset = '+=' + offset;
     } else {
      offset = '-=' + Math.abs(offset);
     }
     list.animate({'left': offset}, 400, function () {
      if(left > -200){
       list.css('left', -720 * len);
      }
      if(left < (-720 * len)) {
       list.css('left', -720);
      }
     });
 }
//用于为按钮添加样式
 function showButton() {
     buttons.eq(index-1).addClass('on').siblings().removeClass('on');
 }

 function play() {
     timer = setTimeout(function () {
         next.trigger('click');
         play();
         }, interval);
 }
 function stop() {
     clearTimeout(timer);
 }
//为按钮添加点击事件
 next.bind('click', function () {
     if (list.is(':animated')) {
         return;
     }
     if (index == 5) {
         index = 1;
     } else {
         index += 1;
     }
     animate(-720);
     showButton();
 });

 prev.bind('click', function () {
     if (list.is(':animated')) {
         return;
     }
     if (index == 1) {
         index = 5;
     } else {
         index -= 1;
     }
     animate(720);
     showButton();
 });

 buttons.each(function () {
     $(this).bind('click', function () {
         if (list.is(':animated') || $(this).attr('class')=='on') {
             return;
         }
         var myIndex = parseInt($(this).attr('index'));
         var offset = -720 * (myIndex - index);

         animate(offset);
         index = myIndex;
         showButton();
     })
 });

 container.hover(stop, play);

 play();

 });
