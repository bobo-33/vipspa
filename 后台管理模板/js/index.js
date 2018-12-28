$(function(){	
	var wh=$(window).height();
	var bh=wh-180;
	$(".Wrapper").height(wh)
	$(".body").height(bh)
	
})

//页面路由配置
vipspa.start({
    view: '#ui-view',
    router: {
        'main1': { 
          	templateUrl: 'views/main1/main1.html',
          	controller: 'js/apps/main1/main1.js',
          	subView: '#ui-sub-view',
            children: [
                {//a
                    name: 'a1',
                    templateUrl: 'views/main1/a/a1.html',
                    controller: 'js/apps/main1/a/a1.js',
                },
                {
                    name: 'a2',
                    templateUrl: 'views/main1/a/a2.html',
                    controller: 'js/apps/main1/a/a2.js',
                },
                {//b
                    name: 'b1',
                    templateUrl: 'views/main1/b/b1.html',
                    controller: 'js/apps/main1/b/b1.js',
                },
                {//d
                    name: 'd1',
                    templateUrl: 'views/main1/d/d1.html',
                    controller: 'js/apps/main1/d/d1.js',
                },
                {//c
                    name: 'c1',
                    templateUrl: 'views/main1/c/c1.html',
                    controller: 'js/apps/main1/c/c1.js',
                },
                {
                    name: 'c2',
                    templateUrl: 'views/main1/c/c2.html',
                    controller: 'js/apps/main1/c/c2.js',
                },
                {
                    name: 'c3',
                    templateUrl: 'views/main1/c/c3.html',
                    controller: 'js/apps/main1/c/c3.js',
                },
                {
                    name: 'c4',
                    templateUrl: 'views/main1/c/c4.html',
                    controller: 'js/apps/main1/c/c4.js',
                },
                {
                    name: 'c5',
                    templateUrl: 'views/main1/c/c5.html',
                    controller: 'js/apps/main1/c/c5.js',
                },
                {
                    name: 'c6',
                    templateUrl: 'views/main1/c/c6.html',
                    controller: 'js/apps/main1/c/c6.js',
                },
                {
                    name: 'c7',
                    templateUrl: 'views/main1/c/c7.html',
                    controller: 'js/apps/main1/c/c7.js',
                },
                {
                    name: 'c8',
                    templateUrl: 'views/main1/c/c8.html',
                    controller: 'js/apps/main1/c/c8.js',
                },
                {
                    name: 'c9',
                    templateUrl: 'views/main1/c/c9.html',
                    controller: 'js/apps/main1/c/c9.js',
                }
            ]
        },
       	'main2': { 
          	templateUrl: 'views/main2/main2.html',
          	controller: 'js/apps/main2/main2.js',
        },
        'main3': { 
          	templateUrl: 'views/main3/main3.html',
          	controller: 'js/apps/main3/main3.js',
        },
        'main4': { 
          	templateUrl: 'views/main4/main4.html',
          	controller: 'js/apps/main4/main4.js',
        },
        'defaults': 'main1' //默认路由
    },
    errorTemplateId: '#error',  //可选的错误模板，用来处理加载html模块异常时展示错误内容
      	
});




//顶部菜单点击效果
$(".header .topMenu li").click(function(){
	$(this).addClass("active").siblings(".header .topMenu li").removeClass("active");		
})

//截取hash和参数之间的数值
var hash=location.hash.split("#")[1];
//判断  当页面刷新对应菜单显示效果
$.each($(".header .topMenu li"), function(i,item) {
	var str=$(this).children("a").attr("href")
	var href = str.split("#")[1];
	if(href === hash){
		$(this).addClass("active").siblings(".header .topMenu li").removeClass("active");		
	}
	
});