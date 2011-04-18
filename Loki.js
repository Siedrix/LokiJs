/* loki-core.js */
(function(global){
	var Loki = jQuery.sub();
	
	Loki.console = {};
	Loki.ajax = {};
	Loki.templates = {};
	
	global.Loki = Loki;
	global.$L = Loki;
})(typeof window === 'undefined' ? this : window);
/* loki-ajax.js */
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
/* loki-console.js */
(function($L){
	$L.console = {
		_messages:[],
		log:function(message){
			this._messages.push(message);
			if(window.console && config.debbug){
				console.log(message);
			}
		},
		logs:function(){
			if(window.console){
				console.log(this._messages);
			}	
		},
		getLogs:function(){
			return this._messages;
		},
		logsByType:function(type){
			if(window.console){
				console.log(_.select(this._messages,function(item){return item.type == type;}));
			}				
		},
		getLogsByType:function(type){
			return _.select(this._messages,function(item){return item.type == type});
		},
		flush:function(){
			this._messages = [];
		}
	}

})($L);
/* loki-template.js */
(function($L){
	$L.template = {
		_templates : {},
		load : function(templateName){
			var dfd = $.Deferred();
			var that = this;
			if(config.status = "development"){
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