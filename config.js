config = {
	'status':'production'
}

production = {
	scripts : {
		'jquery':'http://code.jquery.com/jquery-latest.js',
		'jquery.tmpl':'http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js',
		'underscore':'http://documentcloud.github.com/underscore/underscore-min.js'
	}
}

development = {
	scripts : {
		'jquery':'src/jquery-1.5.2.js',
		'jquery.tmpl':'src/jquery.tmpl.js',
		'underscore':'src/underscore-min.js'
	}
}

yepnope({
	test: config.status == 'production',
	yep: production.scripts,
	nope: development.scripts
})