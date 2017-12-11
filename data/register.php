<?php
/*
实现用户注册。接收客户端提交的注册数据：uname、upwd、email、phone，实现新用户的注册。输出注册成功或失败。
*/

#1.接收客户端提交的数据
#var_dump($_REQUEST);  客户端提交的数据被PHP解释器保存在一个关联数组中：$_REQUEST
@$n = $_REQUEST['uname'];		#@用于压制错误消息
@$p = $_REQUEST['upwd'];


#2.连接到MySQL服务器
require('init.php');

#3.向MySQL服务器提交SQL语句
//$sql = "INSERT INTO xk_user VALUES(NULL,'$n','$p','images/avatar/default.png',NULL)";
$sql = "INSERT INTO xk_user VALUES(NULL,'$n','$p',NULL,NULL)";
$result = mysqli_query($conn, $sql);
//echo $result;

#4.输出执行结果  DML: 失败-false  成功-true
if($result===false){
	echo '{"code":-1,"msg":"注册失败"}';
}else{
    echo '{"code":1,"msg":"注册成功"}';
}

