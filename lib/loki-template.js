(function($L){
	var _templates = {};

	$L.extend({template :{
		load : function(templateName){
			var dfd  = $.Deferred();
			var that = this;
			var url  = config.templates.baseUrl + templateName + '.' + config.templates.termination;

			if(this.isLoaded(templateName)){
				dfd.resolveWith(null,[templateName]);
			}else{
				$.ajax({
					url: url,
					success: function(tmpl){
						$.template( templateName, tmpl );
						_templates[templateName] = tmpl;
						dfd.resolveWith(null,[templateName]);
					}
				});
			}
			return dfd.promise();
		},
		isLoaded:function(templateName){
			return _(_templates).chain()
				.keys()
				.any(function(item){return item == templateName;})
				.value();
		}
	}});

})($L);