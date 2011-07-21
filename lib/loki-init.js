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
					yepnope({
						load : 'app/main.js',
						complete : onLoad
					});					
				}
			});
		}
	};

	function onLoad(){
		$(window).hashchange( function(){
			var hash = location.hash.replace('#!/','').replace('#!','').split("/");
			if(!hash[0] || hash[0] == ""){
				hash[0] = 'Index';
			}

			if(!hash[1] || hash[1] == ""){
				hash[1] = 'Index';
			}		

			Loki.ee.emit('Router::'+hash.join('::'));
		});

		if(!location.hash){
			location.hash = config.initialAction;
		}else{
			$(window).hashchange();								
		}		
	}

	global.Loki = Loki;
	global.$L = Loki;

	Loki.loader();
})(typeof window === 'undefined' ? this : window);

