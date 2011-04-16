(function($L){
	$L.ajax = function(options){
		console.log(options);
		if(config.status = "development"){
			var url = development.ajax.baseUrl+options.url
		}
		console.log(url)
		$.ajax({
			url:url,
			success:function(data){
				options.success(data)
			}
		});
	}
})($L);