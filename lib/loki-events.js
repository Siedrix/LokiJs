(function($L){
	//This shouldnt be here
	var Events = new EventEmitter2({
		delimiter : '::'
	});	

	$L.extend({Events : Events});

	//Bind hashchange to EventEmitter2
	$(window).hashchange( function(){
		var hash = location.hash.replace('#!/','').replace('#!','').split("/");
		if(!hash[0] || hash[0] == ""){
			hash[0] = 'Index';
		}

		if(!hash[1] || hash[1] == ""){
			hash[1] = 'Index';
		}		

		Loki.Events.emit('Router::'+hash.join('::'));
	});
})($L);
