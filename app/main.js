$(document).ready(function(){
	$L.console.log({type:'start',message:'lets rock'});

	$L.Controller.set('Blog',{
		Single : {
			'data'		: 'example.php',
			'template'  : 'example',
			'before'	: function(){
				$('#main').html('');
			},
			'after'		: function(data){
				console.log(data);
			}
		},
		List :	{
			'data': 'example.php',
			'template' : 'example'
		}
	});
	$L.Controller.set('Links',{
		List : function(){
			console.log('This is a single link');
		},
		Single : function(){
			console.log('This is the list of all post');
		}
	});

	$L.Events.on('Blog::Single::AfterRender',function(data){
		console.log('After render',data);
	});

	$L.Events.on('*::*::AfterRender',function(data){
		console.log('After render',data);
	});
});