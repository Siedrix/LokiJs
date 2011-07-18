(function($L){
	$L.template = {
		_templates : {},
		load : function(templateName){
			var dfd = $.Deferred();
			var that = this;
			if(config.status == "development"){
				var url = development.templates.baseUrl + templateName + '.' + development.templates.termination;
			}

			if(this.isLoaded(templateName)){
				dfd.resolveWith(null,[templateName]);
			}else{
				$.ajax({
					url: url,
					success: function(tmpl){
						$.template( templateName, tmpl );
						that._templates[templateName] = tmpl;
						dfd.resolveWith(null,[templateName]);
					}
				});
			}
			return dfd.promise();
		},
		isLoaded:function(templateName){
			return _(this._templates).chain()
				.keys()
				.any(function(item){return item == templateName})
				.value();
		}
	}
})($L);