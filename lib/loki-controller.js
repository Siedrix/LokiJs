(function($L){
	var _controllers = {};

	//Dispatch controllers...
	$L.Events.on('Router::*::*',function(e){
		var hash = e.split("::");
		hash.shift();

		if(_controllers[hash[0]] && _controllers[hash[0]][hash[1]]){
			var controller = _controllers[hash[0]];
			var action = _controllers[hash[0]][hash[1]];
			if(action.before){
				action.before();
			} 
			$L.render({
				url		: action.data,
				template: action.template,
				success:function(data){
					if(action.after){
						action.after();
						var afterRender = controller.key + '::' + action.key  + '::AfterRender';
						console.log(afterRender);
						$L.Events.emit(afterRender);
					}
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