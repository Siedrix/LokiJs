config = {
	status	 : 'production',
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
		lokiCore 	   :'lib/loki-core.js',
		lokiEvents	   :'lib/loki-events.js',
		lokiConsole	   :'lib/loki-console.js',
		lokiController :'lib/loki-controller.js',
		lokiTemplate   :'lib/loki-template.js',
		lokiAjax       :'lib/loki-ajax.js'
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