(function($L){
	$L.getData = function(options){
		var dfd = $.Deferred();
		if(config.status = "development"){
			var url = development.ajax.baseUrl+options.url
		}
		$.ajax({
			url:url,
			success:function(data){
				options.success(data);
				dfd.resolveWith(null,[data]);
			}
		});
		return dfd.promise();
	},
	$L.render = function(options){
		$L.when(
			$L.getData(options),
			$L.template.load('example')
		).then(function(data,template){
			$.tmpl(template, data ).appendTo( "body" );
		});
	}
})($L);