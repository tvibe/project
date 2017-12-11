/**
 * Created by web on 2017/12/6.
 */
/**
 * 重构封装后的change.js
 * jquery变量要求首字符为_，变量集中声明，避免全局变量
 */
$(function () {
    //方法
    var _tab_function=function (_self,_other,_self_effect_1,_self_effect_2) {
        var index=_self.index();
        if(!_self.hasClass("active")){
            _self.addClass("active").siblings(_other).removeClass("active");
            $(_self_effect_1).eq(index).addClass("active").siblings(_self_effect_1).removeClass("active");
            if(_self_effect_2 != ''){
                $(_self_effect_2).eq(index).addClass("active").siblings(_self_effect_2).removeClass("active");
            }
        }
    }
//新闻
    //    news
    $('.news-con-title i').click(function () {
        var  index=$(this).index(),
            _self=$(this),
            _other="i",
            _self_effect_1=".news-con-list-con .news-list";
        _tab_function(_self,_other,_self_effect_1);
    })
//游戏资料
    //    data-con
    $(".data-con-tab li").click(function () {
        var index=$(this).index(),
            _self=$(this),
            _other="li",
            _self_effect_1=".data-con-list-item";
        _tab_function(_self,_other,_self_effect_1);
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
    $(".character-tab-bar i").click(function(){
        var _self = $(this),
            _other = "i",
            _self_effect_1 = ".character-info .character-info-con",
            _self_effect_2 = ".character-info .character-model";

        _tab_function(_self,_other,_self_effect_1,_self_effect_2);
    });

    //  school
    $(".school-tab-bar i").click(function(){
        var index = $(this).index(),
            _self = $(this),
            _other = "i",
            _self_effect_1 = ".school-info .school-info-con",
            _self_effect_2 = ".school-info .school-behalf";

        _tab_function(_self,_other,_self_effect_1,_self_effect_2);
    });

    //江湖映画 ART
    $(".art-top-tab i").click(function(){
        var _self = $(this),
            _other = "i",
            _self_effect_1 = ".art-con > ul";

        _tab_function(_self,_other,_self_effect_1);
    });
    $(".art-con .l-btn").click(function(){
        var index = $(".art-con ul.active li.active").index(),
            num = $(".art-con ul.active li").length,
            now_index = (index-1>=0)?(index-1):(num-1);
        $(".art-con ul.active li").eq(now_index).addClass("active").siblings("li").removeClass("active");
    });
    $(".art-con .r-btn").click(function(){
        var index = $(".art-con ul.active li.active").index(),
            num = $(".art-con ul.active li").length,
            now_index = (index+1<num)?(index+1):0;
        $(".art-con ul.active li").eq(now_index).addClass("active").siblings("li").removeClass("active");
    });



})
$(function () {
    var username=sessionStorage.getItem('uname');
    if(!username){
        $(".nav-bar-inner-r").append('<a href="login.html" target="_blank" class="a_hover"><p class="b-font">游戏登录</p><p class="s-font">LOGIN</p></a>');
    }else {
        $(".nav-bar-inner-r").append('<a class="pic"><p><img src="images/login/character_6_btn.png" style=" height: 47px;margin-top: 0px"/></p><p class="s-font">'+username+'</p></a>');
    }
})