//日期格式化
function fomartTime(unix){
	var F = new Date(unix);
	var month = ((F.getMonth()+1)<10)?"0"+(F.getMonth()+1):F.getMonth()+1;
	var date = (F.getDate()<10)?"0"+F.getDate():F.getDate();
	fullDate = F.getFullYear() + "-" + month + "-" + date;
	return fullDate;
}
//定义页面高度
var _H=$(window).height();
$(".login_body").css("minHeight",_H);;
$(".main").css("height",_H);
$(".main_s").css("height",_H);
$(".rightContent").height(_H-114);
//侧边栏菜单
$(".sider ul li .menu").click(function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active").next(".sub_menu").slideUp(100);
	}else{
		$(document).find(".sider ul li .menu.active").removeClass("active").next(".sub_menu").slideUp(100);
		$(this).addClass("active").next(".sub_menu").slideDown(100);
		}
})
