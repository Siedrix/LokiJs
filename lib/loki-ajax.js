(function($L){
	$L.getData = function(options){
		var dfd = $.Deferred();
		if(config.status == "development"){
			var url = development.ajax.baseUrl+options.url;
		}
		if(config.status == "production"){
			var url = production.ajax.baseUrl+options.url;
		}
		$.ajax({
			'url':url,
			success:function(data){
				if(typeof options.success === 'function'){
					options.success(data);
				}
				dfd.resolveWith(null,[data]);
			}
		});
		return dfd.promise();
	},
	$L.render = function(options){
		$L.when(
			$L.getData({url:options.url}),
			$L.template.load(options.template)
		).then(function(data,template){
			$.tmpl(template, data ).appendTo( "body" );
			options.success(data,template);
		});
	}
})($L);