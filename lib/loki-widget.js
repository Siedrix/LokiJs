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
				console.log('Do i have a widget?',widget);
				if(!widget.active){
					widget.init();
					widget.active = true;
				}

				_.each(widget.hooks,function(hook,onAction){
					var path = onAction.split("::");
					if(path.length == 2){					
						var path = path[0] + '::*::' + path[1];
					}

					Loki.Events.on(path,function(path, data){
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