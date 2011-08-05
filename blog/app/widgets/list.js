Loki.Widget.set('List',{
	init : function(){
		console.log('List widget is loaded');
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
		'Blog::Enter' : function(data){
			Loki.render({
				data	 : data,
				template : 'sidebar/single',
				target   : this.element.find('.blog')
			});
			this.set('Open','Blog');
		},
		'Blog::Leave' : function(){
			this.set('Close','Blog');
		}
	}
});
