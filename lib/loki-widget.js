(function($L){
	var _widgets = {};


	$L.extend({Widget :{
		set : function(name, options){
			console.log('Declaring Widget', name, options);
			options.key = name;
			_widgets[name] = options;
		},
		activate : function(widgets){
			_.each(widgets,function(name){
				var widget = _widgets[name];
				widget.init();

				_.each(widget.hooks,function(hook,onAction){
					var path = onAction.split("::");
					if(path.length == 2){					
						var path = path[0] + '::*::' + path[1];
					}

					console.log('hook set for ', path)
					Loki.Events.on(path,function(path, data){
						console.log('Hook()', arguments);
						console.log('What is widget inside Loki.Widget.js', widget)
						hook(widget,data);
					});
				});
			});
		},
		deactivate : function(){
			
		},
		getAll : function(){
			return _widgets;
		}
	}});	


})($L);