$(function(){
	//sidebarMenu
	$.sidebarMenu($('.sidebar-menu'))

	var wh=$(window).height();
	var bh=wh-180;
	$(".Wrapper").height(wh)
	$(".body").height(bh)
	
})
//顶部菜单
var session = window.sessionStorage;
var zoo = 1;
$(".header .topMenu li").click(function(){
	$(this).addClass("active").siblings(".header .topMenu li").removeClass("active");	
	var xIndex=$(this).children("a").attr("data");
	if(xIndex==1){
	$(".sidebar-menu").empty();
		$(".sidebar-menu").append(aMenu)
	}else if(xIndex==2){
		$(".sidebar-menu").empty();
		$(".sidebar-menu").append(bMenu)
	}else if(xIndex==3){
		$(".sidebar-menu").empty();
		$(".sidebar-menu").append(cMenu)
	}else if(xIndex==4){
		$(".sidebar-menu").empty();
	}
	
	session.setItem("zoo",xIndex)
	
})
	    
/**
 * 
 * router
 * 
 **/
	//定义左侧菜单a
	var aMenu='<li class="treeview">'+
			        '<a href="#">'+
			            '<i class="fa fa-table"></i> <span>Tables</span>'+
			            '<i class="fa fa-angle-left pull-right"></i>'+
			        '</a>'+
			        '<ul class="treeview-menu">'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Simple tables</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Data tables</a></li>'+
			        '</ul>'+
		      	'</li>'+
			    '<li>'+
			        '<a href="#">'+
				        '<i class="fa fa-envelope"></i> <span>Mailbox</span>'+
				        '<small class="label pull-right label-warning">12</small>'+
			        '</a>'+
			    '</li>'+
		      	'<li class="treeview">'+
			        '<a href="#">'+
			            '<i class="fa fa-folder"></i> <span>Examples</span>'+
			            '<i class="fa fa-angle-left pull-right"></i>'+
			        '</a>'+
			        '<ul class="treeview-menu">'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Invoice</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Profile</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Login</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Register</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Lockscreen</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> 404 Error</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> 500 Error</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Blank Page</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Pace Page</a></li>'+
			        '</ul>'+
		       '</li>'+
		        '<li><a href="#"><i class="fa fa-book"></i> <span>Documentation</span></a></li>';
	//定义左侧菜单b
	var bMenu='<li class="treeview">'+
			        '<a href="#">'+
			            '<i class="fa fa-table"></i> <span>Tables</span>'+
			            '<i class="fa fa-angle-left pull-right"></i>'+
			        '</a>'+
			        '<ul class="treeview-menu">'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Simple tables</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Data tables</a></li>'+
			        '</ul>'+
		      	'</li>'+
			    
		      	'<li class="treeview">'+
			        '<a href="#">'+
			            '<i class="fa fa-folder"></i> <span>Examples</span>'+
			            '<i class="fa fa-angle-left pull-right"></i>'+
			        '</a>'+
			        '<ul class="treeview-menu">'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Invoice</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Profile</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Login</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Register</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Lockscreen</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> 404 Error</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> 500 Error</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Blank Page</a></li>'+
			            '<li><a href="#"><i class="fa fa-circle-o"></i> Pace Page</a></li>'+
			        '</ul>'+
		       '</li>';
	//定义左侧菜单c
	var cMenu='<li>'+
			        '<a href="#">'+
				        '<i class="fa fa-envelope"></i> <span>Mailbox</span>'+
				        '<small class="label pull-right label-warning">12</small>'+
			        '</a>'+
			    '</li>'+
		        '<li><a href="#"><i class="fa fa-book"></i> <span>Documentation</span></a></li>';
	
	
	//页面路由
	vipspa.start({
        view: '#ui-view',
        router: {
            'a1': { 
              	templateUrl: 'views/a/a1.html',
              	controller: 'js/apps/a/a1.js',
              	subView: '#ui-sub-view',
                children: [
                    {
                        name: 'login',
                        templateUrl: 'views/login.html',
                        controller: 'js/app/login.js',
                    },
                    {
                        name: 'regist',
                        templateUrl: 'views/regist.html',
                        controller: 'js/app/regist.js',
                    }
                ]
            },
           'b1': { 
              	templateUrl: 'views/b/b1.html',
              	controller: 'js/apps/b/b1.js'
            },
            'c1': { 
              	templateUrl: 'views/c/c1.html',
              	controller: 'js/apps/c/c1.js'
            },
            'd1': { 
              	templateUrl: 'views/d/d1.html',
              	controller: 'js/apps/d/d1.js'
            },  
            'defaults': 'a1' //默认路由
        },
        errorTemplateId: '#error',  //可选的错误模板，用来处理加载html模块异常时展示错误内容
          	
    });


// 判断模块出现页面不同
zoo = session.getItem('zoo');
var modules=$(".header .topMenu li a").attr("data");
console.log(modules)
console.log(zoo)

$.each($(".header .topMenu li"), function(i,item) {
	var data=$(this).children("a").attr("data");
	if(data == zoo){
		$(this).addClass("active").siblings(".header .topMenu li").removeClass("active");	
	}
});
if(zoo==1){
	$(".sidebar-menu").empty();
	$(".sidebar-menu").append(aMenu)
}else if(zoo==2){
	$(".sidebar-menu").empty();
	$(".sidebar-menu").append(bMenu)
}else if(zoo==3){
	$(".sidebar-menu").empty();
	$(".sidebar-menu").append(cMenu)
}else if(zoo==4){
	$(".sidebar-menu").empty();
}

function hash(){
	console.log("1")
	$.each($(".header .topMenu li"), function(i,item) {
		var data=$(this).children("a").attr("data");
		if(data.match(location.hash)){
			console.log($(this).children("a").attr("data"))
		}
	});
}

setTimeout(hash(),1000)
