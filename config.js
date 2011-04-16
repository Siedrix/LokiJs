config = {
	'status':'development',
	'debbug':false
}

production = {
	scripts : {
		'jquery':'http://code.jquery.com/jquery-latest.js',
		'jquery.tmpl':'http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js',
		'underscore':'http://documentcloud.github.com/underscore/underscore-min.js'
	},
	templates:{
		'termination':'',
		'base-url':''
	}
}

development = {
	scripts : {
		'jquery':'src/jquery-1.5.2.js',
		'jqueryTmpl':'src/jquery.tmpl.js',
		'underscore':'src/underscore-min.js',
		'loki-core':'lib/loki-core.js',
		'loki-console':'lib/loki-console.js',
		'loki-template':'lib/loki-template.js',
		'loki-ajax':'lib/loki-ajax.js'
	},
	templates:{
		'termination':'html',
		'baseUrl':'http://localhost/dev/lokijs/LokiJs-jquery1.5/templates/'
	},
	ajax :{
		baseUrl:'http://localhost/dev/lokijs/LokiJs-jquery1.5/json/'
	}
}

yepnope({
	test: config.status == 'production',
	yep: production.scripts,
	nope: development.scripts,
	complete: function(){
		yepnope({
			load : 'app/main.js'
		});
	}
})