(function($L){
	$L.extend({
		getData : function(options){
			var dfd = $.Deferred();

			if(options.url){
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
			}else if(options.data){
				//This is a hack
				setTimeout(function(){
					dfd.resolveWith(null,options.data);
				},10)
				return dfd.promise();
			}else{
				return null;
			}
		},
		render : function(options){
			var target = options.target || config.mainArea;
			var url    = options.url 	|| null;

			$.when(
				$L.getData({url:options.url,data:options.data}),
				$L.template.load(options.template)
			).done(function(data,template){
				console.log('Rendering ', template, data);
				var el = $.tmpl(template, data ).appendTo( target );
				if(options.success){
					options.success(data,template,el);
				}
			});
		}
	});
})($L);