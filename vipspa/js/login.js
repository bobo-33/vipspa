

/**
 * 点击刷新登录验证码
 * @param img
 */
function changeImage(img){
    img.src="checkCode/checkCode.do?id"+Math.random();
  }
function rcode() {
    var code = document.getElementById("captchaImage");
//    code.onclick = function () {
    	code.src='checkCode/checkCode.do?id'+Math.random();
//    };
  };
  
function login(){
	var username = $("#userName");
	var uLoginName = $("#userName").val();
	var password = $("#userPsw");
	var uPassword = $("#userPsw").val();
	var code = $("userCode");
	var cCode = $("userCode").val();

	if(uLoginName== ""){
		 $("#errTip").html("用户名不能为空！");
		 username.focus();
		 setTimeout(function(){
				$("#errSpan").html(null);
			},3000);
         return false;
   
    }else if(uPassword== ""){
    	$("#errSpan").html("");
    	$("#errSpan").html("密码不能为空！");
		password.focus();
		setTimeout(function(){
			$("#errSpan").html(null);
		},3000);
    	return false;
    }else if(cCode == ""){
    	$("#errSpan").html("");
   	 $("#errSpan").html("验证码不能为空！");
   	setTimeout(function(){
		$("#errSpan").html(null);
	},3000);
   	 code.focus();
        return false;
    }else{
     	$.ajax({
     		url : 'system/user/login.do',
 			type: 'POST',
 			contentType: 'application/json;charset=utf-8',
 			dataType :'json',
 			data : JSON.stringify({
 				"token":"",
 				"data":{
 					"username":uLoginName,
 					"password":uPassword , 
 					"checkCode" : cCode
 				}
 			}),
 			success : function(data) {
 				console.log(data.data)
				if (data.status == 0) {
					sessionStorage["uname"]=data.data.suUserName;
					window.location.href = 'index.html';
				} else if (data.status == 102) {
					$("#errSpan").html("用户名不存在！");
					rcode();
					setTimeout(function(){
						$("#errSpan").html(null);
					},3000);
				} else if (data.status == 101) {
					$("#errSpan").html("用户名或密码错误！");
					rcode();
					setTimeout(function(){
						$("#errSpan").html(null);
					},3000);
				}else if (data.status == 1002){
					$("#errSpan").html("验证码错误！");
					rcode();
					setTimeout(function(){
						$("#errSpan").html(null);
					},3000);
				}
 			},error:function(e){
 				console.log(e);
 			}
 		});
       }
}