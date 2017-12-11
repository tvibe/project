// window.onload=function () {
//     var container=document.getElementById('');
// }
window.onload=function () {//页面加载调用
    var container=document.getElementsByClassName('slide-con-inner');
    // var container=document.querySelector('.slide-con-inner');
    var list=document.getElementById('list');
    var buttons=document.getElementById('buttons').getElementsByTagName('span');
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var index=1;//用于索引当前按钮
    var len=5;//图片数量
    var animated = false;//判断切换是否进行
    var interval = 3000;//自动播放计时器3s
    var timer;//定时器
    function animate (offset) {//动画切换
        animated=true;//切换进行中
        var time=360;//位移总时间
        var inteval=10;//位移时间间隔
        var times=time/inteval;//位移次数
        var speed = offset/times;//位移速度
        var left= parseInt(list.style.left)+offset;//目标值

        var go=function () {
            //这两种情况表示还在切换中
            if ( (speed > 0 && parseInt(list.style.left) < left)  ||(speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);//继续执行切换go()函数
            }
            else {
                list.style.left = left+ 'px';
                if(left<-720*len){
                    list.style.left="-720px";
                }
                if(left>-720){
                    list.style.left=-720*len+"px";
                }
                animated = false;//切换完成
            }
        }
        go();
    }
    //用于为按钮添加样式
    function showButton() {
        //先找出原来有.on类的按钮，并移除其类
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        //为当前按钮添加类，索引下标从0开始，故需减1
        buttons[index - 1].className = 'on';
    }

//自动播放
    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, interval);
    }
    //清除定时器
    function stop() {
        clearTimeout(timer);
    }
//右点击
    next.onclick = function () {
        if (animated) {//如果切换还在进行，则直接结束，直到切换完成
            return;
        }
        if(index==5){
            index=1;
        }
        else{
            index+=1;
        }
        animate(-720);
        showButton();
    }
    //左点击
    prev.onclick = function () {
        if (animated) {//如果切换还在进行，则直接结束，直到切换完成
            return;
        }
        if(index==1){
            index=5;
        }
        else{
            index-=1;
        }

        animate(720);
        showButton();
    }

    //通过循环为按钮添加点击事件
    for (var i=0;i<buttons.length;i++) {
        buttons[i].onclick=function() {
            if (animated) {//如果切换还在进行，则直接结束，直到切换完成
                return;
            }
            //当继续点击按钮时不切换
            if(this.className=='on'){
                return;
            }
            //通过获取按钮的标签自定义属性index，得到索引值，再计算差值
            var myIndex=parseInt(this.getAttribute('index'));
            //真正的偏移量
            var offset=-720*(myIndex-index);
            animate(offset);
            //将点击按钮的index属性置为当前
            index=myIndex;
            showButton();
        }
    }
    //父容器的移入移出事件
    container.onmouseover = stop;
    container.onmouseout = play;
    play();//自动播放
}