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