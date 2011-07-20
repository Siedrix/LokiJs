(function(global){
	var config = global.config || {};
	config.scripts = global[global.config.status].scripts;
	config.templates = global[global.config.status].templates;
	config.ajax = global[global.config.status].ajax;

	var Loki = {
		console : {},
		ajax : {},
		templates : {},
		loader : function(){
			yepnope({
				test: config.scripts,
				yep : config.scripts,
				complete : function(){
					console.log('Completed');
					yepnope({
						load : 'app/main.js',
						complete : function(){
							if(!location.hash){
								location.hash = config.initialAction;
							}else{
								$(window).hashchange();								
							}
						}
					});					
				}
			});
			console.log('Shoud load:', config)
		}
	};

	global.Loki = Loki;
	global.$L = Loki;

	Loki.loader();
})(typeof window === 'undefined' ? this : window);

