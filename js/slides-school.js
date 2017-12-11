/**
 * 左右切换
 */
$(function () {
    var list=$(".slides_control");
    var prev=$(".prev");
    var next=$(".next");
    var len=11;
    var index=1;
    var lis=$(".slides_control li");
    var buttons=$(".nav li");

    function animate(offset) {
        var left=parseInt(list.css("left"))+offset;
        // if (offset>0) {
        //     offset = '+=' + offset;
        // } else {
        //     offset = '-=' + Math.abs(offset);
        // }
        // list.animate({'left': offset}, function () {
            // if(left > -1126){
            //     list.css('left', -1126 );
            // }
            // if(left < (-1126 *2)) {
            //     list.css('left', -1126);
            // }
        // });
    }
    next.bind('click',function () {
        if (index == 11) {
            index = 1;
        } else {
            index += 1;
        }
        animate(-1126);
        showButton();
    })
    prev.bind('click',function () {
        if (index == 1) {
            index = 11;
        } else {
            index -= 1;
        }
        animate(-1126);
        showButton();
    })

    function showButton() {
        for(var i=0;i<12;i++){
            lis.eq(i).addClass("disn");
            lis.eq(index).addClass("disb").siblings().removeClass("disb");
            // lis.eq(index).toggleClass("disb");
            lis.eq(index).removeClass("disn");
            $(".nav li").eq(i).children("a").removeClass("hover");
        }
        $(".nav li").eq(index-1).children("a").addClass("hover");
    }

    buttons.each(function () {
        var myIndex="";
        $(this).bind('click', function () {
            myIndex = parseInt($(this).attr('index'));
            console.log("myIndex:"+myIndex);
            console.log("index:"+index);
            var offset = -1126* (myIndex - index);
            animate(offset);
            index = myIndex;
            showButton();
        })
    });

})
