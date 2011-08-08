Loki.Widget.set('List',{
	init : function(){
		console.log('List widget is loaded');
		var widget = this;
		Loki.render({
			template : widget.template,
			target   : widget.target,
			success  : function(data,template,el){
				widget.element = el;
				console.log('activate render success',arguments);
			}
		});		
	},
	template : 'widgets/sidebar/list',
	target   : '#sidebar',
	events : [
		{
			object: 'ul li', 
			interaction:'click',
			action:function(){
				// Go to post
			}
		},
	],
	states : {
		'Open' : function(data){
			this.element.find('.'+data).slide();
		},
		'Close' : function(data){
			this.element.find('.'+data).slide();
		}
	},
	hooks  : {
		'Posts::AfterRender' : function(widget,data){
			console.log('That is widget inside hook declaration?', widget);
			Loki.render({
				data	 : data,
				template : 'widgets/sidebar/single',
				target   : widget.element.find('#blog'),
				success  : function(){
					console.log('List Widget hook to Posts::AfterRender', arguments, widget.element);
				}
			});
			//this.set('Open','Blog');
		},
		'Posts::Leave' : function(){
			this.set('Close','Blog');
		}
	}
});