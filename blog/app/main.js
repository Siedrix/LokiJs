//Need something here...
//Probably...
$(document).ready(function(){
	console.log('Ready');

	Loki.Events.on('Blog::*::AfterRender',function(e){
		console.log('From Main.Js',arguments)
	});
});

