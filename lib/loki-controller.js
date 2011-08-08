(function($L){
	var _controllers = {};

	//Dispatch controllers...
	$L.Events.on('Router::*::*',function(e,data){
		console.log('From Router',e,data);
		var hash = e.split("::");
		hash.shift();

		//ToDo
		//This is ugly, needs a better way to be done
		if(_controllers[hash[0]] && _controllers[hash[0]][hash[1]]){
			var controller = _controllers[hash[0]];
			var action = _controllers[hash[0]][hash[1]];
		//End uglyness
			
			//Process extra url
			var url = action.data.replace(/{:[^/]+}/g,data[0])

			if(action.before){
				action.before();
			} 

			Loki.Widget.activate(action.widgets);

			$L.render({
				url		: url,
				template: action.template,
				success:function(data){
					if(action.after){
						action.after();
					}
					

					var afterRender = controller.key + '::' + action.key  + '::AfterRender';
					$L.Events.emit(afterRender,data);
				}
			});
		}else{
			console.log('No controller or action ',hash);
		}
	});

	$L.extend({Controller :{
		set : function(name,obj){
			_.each(obj, function(view,key){ view.key = key });
			obj.key = name;
			_controllers[name] = obj;
		},
		getAll : function(){
			$L.console.log(_controllers);
		}
	}});

})($L);