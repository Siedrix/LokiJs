$(document).ready(function(){
	$L.console.log({type:'start',message:'lets rock'});

	$L.Controller.set('Blog',{
		Single : {
			'data'		: 'example.php',
			'template'  : 'example',
			'before'	: function(){
				$('#main').html('');
			}
		},
		List :	{
			'data': 'Someurl',
			'template' : 'Some Template',
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
});