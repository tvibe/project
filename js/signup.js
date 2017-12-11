/**
 * 用户注册和登录
 */
+function(){
    var flag = {
        "uname":false,
        "password":false,
        "password2":false,
        "checkbox":false
    };
//成功函数
    function success(dom){
        dom.removeClass("active");
        dom.next().html('<i class="success lf"></i>');
    }
//失败函数
    function fail(dom){
        dom.addClass("active");
        dom.next().html('<i class="fail lf"></i>账号格式不正确');
    }
//不能为空
    function isEmpty(dom){
        dom.addClass("active");
        dom.next().html('<i class="fail lf"></i>不能为空');
    }
//长度不能小于四位
    function four(dom){
        dom.addClass("active");
        dom.next().html('<i class="fail lf"></i>长度不能少于四位');
    }
//长度不能小于八位
    function eight(dom){
        dom.addClass("active");
        dom.next().html('<i class="fail lf"></i>长度至少为八位');
    }
//长度不能大于四位
    function tw(dom){
        dom.addClass("active");
        dom.next().html('<i class="fail lf"></i>长度不能大于三十位');
    }
    $(" #userName").focus(function(){
        $(this).next().html("帐号须由字母开头");
        $(this).next().removeClass("animate");
    });
    $("#userName").blur(function (){
        var uname = $(this).val();
        var reg=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        var self=$(this);
        self.next().addClass("animate");
        if(uname.length<1){
            isEmpty(self);
        }else if(uname.length<=4){
            four(self);
        }else if(uname.length>30){
            tw(self);
        }else{
            if (reg.test(uname)) {
                // console.log(uname);
                $.ajax({
                    type:"GET",
                    url:"data/check.php",
                    data:{uname:uname},
                    success:function(data){
                        // console.log(data);
                        if(data.code>0){
                            console.log(data);
                            self.next().html("<i class='success'></i>正确");
                            $("#userName").addClass("success");
                        }else{
                            self.next().html(`<i class="fail"></i>账号已存在`);
                        }
                    }
                });
            }else{
                fail(self);
            }
        }
    });
// 密码校验
    $(" #userPwd").focus(function(){
        $(this).next().html("必须为字母加数字且长度至少8位");
        $(this).next().removeClass("animate");
    });
    $("#userPwd").blur(function(){
        var password=$(this).val();
        var reg=/^(?![^a-zA-Z]+$)(?!\D+$)/;
        var self=$(this);
        self.next().addClass("animate");
        if(password.length<1){
            isEmpty(self);
        }else if(password.length<8){
            eight(self);
        }else if(password.length>20){
            tw(self);
        }else{
            if(!reg.test(password)){
                self.addClass("active");
                self.next().html('<i class="fail lf"></i>密码必须包含数字和字母');
            }else{
                self.removeClass("active");
                success(self);
                flag.password=true;
                if($("#userName").hasClass("success")){
                    flag.uname=true;
                }
                obj.upwd=true;
                $("#userPwd2").prop("disabled",self.val()=="");
            }
        }
    });
//确认密码
    $("#userPwd2").blur(function(){
        var password1=$("#userPwd").val();
        var password2=$(this).val();
        var self=$(this);
        // console.log(password1,password2);
        self.next().addClass("animate");
        if(password1 !=password2){
            // console.log(password2);
            self.addClass("active");
            self.next().html('<i class="fail lf"></i>两次输入密码不一致');
        }else {
            self.removeClass("active");
            success(self);
            flag.password2=true;
        }
    });
//点击错误提示清除
    $(".main").on("click","i",function(e){
        $(e.target).parent().prev().removeClass("active");
        $(e.target).parent().empty();
    });
//阅读并同意
    $("#reg_check").click(function(){
        var self=$(this);
        var btn=$("#submit");
        // $btn.prop("disabled",!$(this).prop("checked"));
        btn.prop("disabled",function () {
            if(!self.prop("checked")){
                btn.removeClass("check");
                return true;
            }
            else{
                btn.addClass("check");
                return false;
            }
        });
    })

//注册表单提交
    $("#submit").click(function (){
        var ok = flag.uname&&flag.password&&flag.password2;
        var self=$(this);
        if(ok==true){
            var uname=$("#userName").val();
            var upwd=$("#userPwd").val();
            // console.log(uname,upwd);
            $.ajax({
                type:"POST",
                url:"data/register.php",
                data:{uname:uname,upwd:upwd},
                success:function(data){
                    // console.log(data);
                    if(data.code>0){
                        // console.log(data.code);
                        var n=3;
                        var timer=setInterval(function(){
                            if(n>=0){
                                self.html("注册成功"+n+"秒后跳转登录");
                                n--;
                            }else{
                                location.href="login.html";
                            }
                        },1000);
                    }else{
                        alert("注册失败，请检查您的网络连接");
                    }
                }
            })
        }else{
            alert("请正确填写信息");
        }
    });


//登录
    var obj={
        "username":false,
        "upwd":false
    };
    $(" #username").focus(function(){
        $(this).next().html("帐号须由字母开头或者手机号");
        $(this).next().removeClass("animate");
    });
    $("#username").blur(function(){
        var uname = $(this).val();
        var reg=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        var self=$(this);
        self.next().addClass("animate");
        if(uname.length<1){
            isEmpty(self);
        }else if(uname.length<4){
            four(self);
        }else if(uname.length>30){
            tw(self);
        }else{
            if (reg.test(uname)) {
                success(self);
                obj.username=true;
            }else{
                fail(self);
            }
        }
    });
// 登录表单提交
    $("#login").click(function(){
        var uname=$("#username").val();
        var upwd=$("#userPwd").val();
        var self=$(this);
        // console.log(uname,upwd);
        if(obj.upwd&&obj.username){
            $.ajax({
                type:"POST",
                url:"data/login.php",
                data:{uname:uname,upwd:upwd},
                success:function(data){
                    sessionStorage.setItem('uname',uname);
                    // console.log(uname);
                    // console.log(data);
                    if(data.code>0){

                        var n=3;
                        var timer=setInterval(function(){
                            if(n>=0){
                                self.html("登录成功"+n+"秒后跳转首页");
                                n--;
                            }else{
                                // $("#logined").html('<p>'+uname+'</p>');
                                location.href="index.html";
                            }
                        },1000);
                        if($("#chb").is(":checked")){
                            localStorage.setItem('uname',data.uname);
                        }
                    }else{
                        $("#login-msg").html("<i class='fail'></i>账号或者密码错误")
                    }
                }
            })
        }

    });
}();