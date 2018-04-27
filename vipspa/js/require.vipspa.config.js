$(function(){
	vipspa.start({
        view: '#ui-view',
        errorTemplateId: '#error', // 可选
        router: {
            'home': {
                templateUrl: 'views/home.html',
                //controller: 'www/js/app/home.js'
            },
            'file_index': {
                templateUrl: 'views/file_index.html',
                controller: 'js/app/file_index.js'
            },
            'file_upload': {
                templateUrl: 'views/file_upload.html',
                //controller: 'www/js/app/contact.js'
            },
            'defaults': 'home' //默认路由
        }
    });

});
