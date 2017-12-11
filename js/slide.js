/**
 *  */
$(function () {
    var list=$(".funnycon-con ul");
    var prev=$("#funnycon-con-prev");
    var next=$("#funnycon-con-next");
    var len=4;
    var index=1;
    function animate(offset) {
        var left=parseInt(list.css('margin-left'))+offset;
        if (offset>0) {
            offset = '+=' + offset;
        } else {
            offset = '-=' + Math.abs(offset);
        }
        list.animate({'margin-left': offset}, 300, function () {
            if(left > -750){
                list.css('margin-left', -750 * len);
            }
            if(left < (-750 * len)) {
                list.css('margin-left', -750);
            }
        });
    }
    //为按钮添加点击事件
    next.bind('click', function () {
        if (index == 4) {
            index = 1;
        } else {
            index += 1;
        }
        animate(-750);
    });

    prev.bind('click', function () {
        if (index == 1) {
            index = 4;
        } else {
            index -= 1;
        }
        animate(750);
    });

})