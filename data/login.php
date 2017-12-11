<?php

//获取初始数据
require("init.php");

//获取用户输入的数据 用户名／密码／验证码
@$u = $_REQUEST["uname"];
@$p = $_REQUEST["upwd"];


//验证用户和密码是否正确
$sql = "SELECT * FROM xk_user  WHERE uname='$u' AND upwd='$p'";
@$result = mysqli_query($conn,$sql);
@$row = mysqli_fetch_assoc($result);
if($row==null){
    echo '{"code":-2,"msg":"用户名或密码有误"}';
}else{
    $uid = $row["uid"];
    echo '{"code":1,"msg":"登录成功","uid":'.$uid.'}';
}
?>