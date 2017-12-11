//role
function setRoleTab(name,cursel,n){
    for(var i=1;i<=n;i++){
        var nav=document.getElementById(name+i);
        var con=document.getElementById(name+"-"+i);
        con.style.display=i==cursel?"table":"none";
        nav.className=i==cursel?name+"con-l-tith"+i:name+"con-l-tit"+i;
    }
}
//background
//resize()方法对对浏览器窗口大小进行计数
$("#data").css("width",$(window).width()-183);
$(window).resize(function() {
    $("#data").css("width",$(window).width()-183);
});

//special
// $(".yxts").css("display","none")
// $(".yxts").click(function () {
//     this.css("display","table");
// })
$(".schoolnav  li").eq(3).click(function () {
    if($(".yxts").css("display")=="none"){
        $(".yxts").css("display","table");
    }else{
        $(".yxts").css("display","none");
    }
});
