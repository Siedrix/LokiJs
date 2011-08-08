(function($L){
	//This shouldnt be here
	var Events = new EventEmitter2({
		delimiter : '::'
	});	

	$L.extend({Events : Events});

	//Bind hashchange to EventEmitter2
	//Should be move to a Router Module
	$(window).hashchange( function(){
		var hash = location.hash.replace('#!/','').replace('#!','').split("/");

		var controller = hash[0] || 'Index'
		var action = hash[1] || 'Index';

		hash.splice(0,2).join('/')

		Loki.Events.emit('Router::'+controller+'::'+action,hash);
	});
})($L);
