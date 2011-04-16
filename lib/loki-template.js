(function($L){
	$L.template = {
		_templates : {},
		load : function(templateName){
			var that = this;
			if(config.status = "development"){
				var url = development.templates.baseUrl + templateName + '.' + development.templates.termination;
			}
			$.ajax({
				url: url,
				success: function(tmpl){
					$.template( templateName, tmpl );
					that._templates[templateName] = tmpl;
				}
			});
		},
		isLoaded:function(templateName){
			return _(this._templates).chain()
				.keys()
				.any(function(item){return item == templateName})
				.value();
		}
	}
})($L);