config = {
	'status':'development',
	'debbug':true
}

production = {
	scripts : {
		'jquery':'http://code.jquery.com/jquery-latest.js',
		'jquery.tmpl':'http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js',
		'underscore':'http://documentcloud.github.com/underscore/underscore-min.js',
		'lokiJs':'https://github.com/Siedrix/LokiJs/raw/master/Loki.js'
	},
	templates:{
		termination:'html',
		baseUrl:'http://localhost/dev/lokijs/LokiJs-jquery1.5/templates/'
	},
	ajax:{
		baseUrl:'http://localhost/dev/lokijs/LokiJs-jquery1.5/json/'
	}
}

development = {
	scripts : {
		jquery:'src/jquery-1.5.2.js',
		jqueryTmpl:'src/jquery.tmpl.js',
		underscore:'src/underscore-min.js',
		lokiCore:'lib/loki-core.js',
		lokiConsole:'lib/loki-console.js',
		lokiTemplate:'lib/loki-template.js',
		lokiAjax:'lib/loki-ajax.js'
	},
	templates:{
		termination:'html',
		baseUrl:'templates/'
	},
	ajax :{
		baseUrl:'json/'
	}
}