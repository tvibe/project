/**
 * Created index
 */
$(function () {
 //新闻
    //    news
    $('.news-con-title i').click(function () {
        var title=$(this);
        var index=$(this).index();
        var list=$(".news-con-list-con .news-list")
        if(!title.hasClass("active")){
            title.addClass("active").siblings(title).removeClass("active");
            list.eq(index).addClass("active").siblings(list).removeClass("active");
        }
    })
//游戏资料
    //    data-con
    $(".data-con-tab li").click(function () {
        var tab=$(this);
        var index=$(this).index();
        var item=$(".data-con-list-item");
        if(!tab.hasClass("active")){
            tab.addClass("active").siblings(tab).removeClass("active");
            item.eq(index).addClass("active").siblings(item).removeClass("active");
        }
        switch(index){
            case 0:
                $(".data-con").css("background","url(images/index/role_introduction_index_bg.jpg)");
                break;
            case 1:
                $(".data-con").css("background","url(images/index/story_index_bg.jpg)");
                break;
            case 2:
                $(".data-con").css("background","url(images/index/school_index_bg.jpg)");
                break;
            case 3:
                $(".data-con").css("background","url(images/index/ymhx_bg.jpg)");
                break;
        }
    })
    //  character
    $(".character-tab-bar i").click(function () {
        var character=$(this);
        var index=$(this).index();
        var model=$(".character-info .character-model");
        var model_text=$(".character-info .character-info-con");
        if(!character.hasClass("active")){
            character.addClass("active").siblings().removeClass("active");
            model.eq(index).addClass("active").siblings(".character-model").removeClass("active");
            model_text.eq(index).addClass("active").siblings(".character-info-con").removeClass("active");
        }
    })

    //  school
    $(".school-tab-bar i").click(function () {
        var index=$(this).index();
        var school=$(this);
        var other="i";
        var model=$(".school-info .school-behalf");
        var model_text=$(".school-info .school-info-con");
        // console.log();
        if(!school.hasClass("active")){
            school.addClass("active").siblings(other).removeClass("active");
            model.eq(index).addClass("active").siblings(".school-behalf").removeClass("active");
            model_text.eq(index).addClass("active").siblings(".school-info-con").removeClass("active");
        }
    })

    //role
    // $(".rolecon-l").bind({
    //     $("")
    // })


    // $(".gf_wx").bind({
    //     "mouseover":function () {
    //         $(".weixin-qd").show();
    //     },"mouseout":function () {
    //         $(".weixin-qd").hide();
    //     }
    // });
    // $(".gf_wx").mouseover(function () {
    //         $(".weixin-qd").show();
    //     })
        // ,"mouseout":function () {
        //     $(".weixin-qd").hide();
        // }


})