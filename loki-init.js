(function(global){
	//Generates config information
	var config = global.config || {};
	config.dependencies = global[global.config.status].dependencies;
	config.modules = global[global.config.status].modules;
	config.application = global[global.config.status].application;
	config.templates = global[global.config.status].templates;
	config.ajax = global[global.config.status].ajax;

	//Creates name space
	var Loki = {};

	//Loads in 3 steps
	yepnope({
		test: config.dependencies,
		yep : config.dependencies,
		complete : function(){
			yepnope({
				test: config.modules,
				yep : config.modules,
				complete : function(){
					yepnope({
						test: config.application,
						yep : config.application,
						complete : onLoad
					});
				}
			});					
		}
	});

	//Onces scripts loaded
	function onLoad(){
		if(!location.hash){
			location.hash = config.initialAction;
		}else{
			$(window).hashchange();								
		}		
	}

	//Binds LokiJs to global object.
	global.Loki = Loki;
	global.$L = Loki;
})(typeof window === 'undefined' ? this : window);