Loki.Controller.set('Posts',{
	'Single': {
		'params' : '{:name}',
		'data': 'blog/single/{:name}.php',
		'template' : 'blog/single',
		'widgets' : ['List','Tags'],
		before : function(){
			$(config.mainArea).html('');
		},
	},
	'List' : {
		'data': 'posts/list.php',
		'template' : 'blog/list',
		'widgets' : ['List'],
		before : function(){
			$(config.mainArea).html('');
		},
	}
});