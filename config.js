config = {
	status	 : 'development',
	debbug	 : true,
	initialAction : '#!/Blog/Single',
	mainArea : '#main'
}

production = {
	dependencies : {
		eventemitter   :'src/eventemitter2.js',
		underscore	   :'src/underscore-min.js',
		jquery1		   :'src/jquery-1.5.2.js',
		jqueryTmpl	   :'src/jquery.tmpl.js',
		hashchange	   :'src/jquery.ba-hashchange.min.js',		
	},
	modules : {
		lokiCore 	   :'Loki.js',
	},
	application : {
		main 		   : 'app/main.js'	
	},
	templates:{
		termination	   :'html',
		baseUrl		   :'templates/'
	},
	ajax :{
		baseUrl:'json/'
	}
}

development = {
	dependencies : {
		eventemitter   :'src/eventemitter2.js',
		underscore	   :'src/underscore-min.js',
		jquery1		   :'src/jquery-1.5.2.js',
		jqueryTmpl	   :'src/jquery.tmpl.js',
		hashchange	   :'src/jquery.ba-hashchange.min.js',
	},
	modules : {
		lokiCore 	   :'noCache!lib/loki-core.js',
		lokiEvents	   :'noCache!lib/loki-events.js',
		lokiConsole	   :'noCache!lib/loki-console.js',
		lokiController :'noCache!lib/loki-controller.js',
		lokiTemplate   :'noCache!lib/loki-template.js',
		lokiAjax       :'noCache!lib/loki-ajax.js'
	},
	application : {
		main 		   :'noCache!app/main.js'	
	},
	templates:{
		termination	   :'html',
		baseUrl		   :'templates/'
	},
	ajax :{
		baseUrl:'json/'
	}
}