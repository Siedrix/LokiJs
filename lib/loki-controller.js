(function($L){
	var _controllers = {};

	window.addEventListener("hashchange", function(){
		var hash = location.hash.replace('#!','').split("/");

		console.log(hash);

		if(_controllers[hash[0]] && _controllers[hash[0]][hash[1]]){
			var action = _controllers[hash[0]][hash[1]];

			action.before ? action.before() : null;
			$L.render({
				url		: action.data,
				template: action.template,
				success:function(data){
					console.log('action');
					console.log(data);
				}
			});
		}else{
			console.log('Action doesnt exist');
		}
	});

	$L.extend({Controller :function(name,obj){
		console.log('adding to controller ',name,obj);
		_controllers[name] = obj;
	},getControllers : function(){
		console.log(_controllers);
	}});

})($L);