(function($L){
	$L.extend({
		getData : function(options){
			var dfd = $.Deferred();
			var url = config.ajax.baseUrl+options.url;

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
		render : function(options){
			var mainArea = options.mainArea || config.mainArea;

			$.when(
				$L.getData({url:options.url}),
				$L.template.load(options.template)
			).then(function(data,template){
				$.tmpl(template, data ).appendTo( mainArea );
				options.success(data,template);
			});
		}
	});
})($L);