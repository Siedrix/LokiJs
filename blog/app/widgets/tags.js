Loki.Widget.set('Tags',{
	init : function(){
		console.log('Tags widget is loaded');
	},
	template : 'widgets/sidebar/tags',
	target   : '#sidebar',
	events : [
		{
			object: 'ul li', 
			interaction:'click',
			action:function(){
				// Go to tags
			}
		},
	],
	hooks  : {
		'Blog::Single::Enter' : function(data){
			$(this.el).find('ul').html();
			Loki.render({
				data	 : data,
				template : 'sidebar/single',
				target   : this.element.find('ul')
			});
		}
	}
});