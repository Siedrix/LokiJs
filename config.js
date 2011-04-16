config = {
	'status':'dev'
}

production = {
	scripts : {
		'jquery':'http://code.jquery.com/jquery-latest.js'
	}
}

yepnope({
	test: config.status == 'production',
	yep: 'http://code.jquery.com/jquery-latest.js',
	nope: 'src/jquery-1.5.2.js'
})