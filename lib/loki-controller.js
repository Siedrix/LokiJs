(function($L){
	var _controllers = {};

	//This shouldnt be here
	Loki.ee = new EventEmitter2({
		delimiter : '::'
	});

	//Dispatch controllers...
	$L.ee.on('Router::*::*',function(e){
		var hash = e.split("::");
		hash.shift();

		if(_controllers[hash[0]] && _controllers[hash[0]][hash[1]]){
			var action = _controllers[hash[0]][hash[1]];
			action.before ? action.before() : null;
			$L.render({
				url		: action.data,
				template: action.template,
				success:function(data){}
			});
		}else{
			console.log('No controller or action ',hash);
		}
	});

	$L.extend({Controller :function(name,obj){
		_controllers[name] = obj;
	},getControllers : function(){
		$L.console.log(_controllers);
	}});

})($L);