(function($L){
	var _messages = [];
	
	$L.extend({console :{
			log:function(message){
				_messages.push(message);
				if(window.console && config.debbug){
					console.log(message);
				}
			},
			logs:function(){
				if(window.console){
					console.log(_messages);
				}	
			},
			getLogs:function(){
				return _messages;
			},
			logsByType:function(type){
				if(window.console){
					console.log(_.select(_messages,function(item){return item.type == type;}));
				}				
			},
			getLogsByType:function(type){
				return _.select(_messages,function(item){return item.type == type});
			},
			flush:function(){
				_messages = [];
			}
		}
	});
})($L);