//Checks config file and load correct files...
Loki.init({
	enviroment : '',
	debbug : '',
	initial action : '!/',
	main area : '#main'
});

//Loki extend...
Loki.extend('Name',function(){})
//Adds Loki.Name();
Loki.extend('Name',{})
//Adds Loki.Name;

//Registes a controller...
Loki.Controller('Blog',{
	//Lives in !/Blog/Single/:id
	'Single': {
		'data': 'Someurl',
		'template' : 'Some Template',
		'widgets' : ['Sidebar'],
		'events' : [
			{object: 'id or class', interaction:'click',action:function(){}},
			{object: 'id or class', interaction:'click',action:function(){}},
			{object: 'id or class', interaction:'click',action:function(){}},
			{object: 'id or class', interaction:'click',action:function(){}}
		],
		'states' : {
			'state name': {
				onEnter : function(){},
				onLeave : function(){}
			}
		},
		before : function(){
			
		},
		after : function(){
			
		}
	},
	//Lives in !/Blog/List
	'List' : {
		...
	}
});

//Registes a widget
Loki.Widget('Sidebar',{
	template : 'Sidebar template info',
	data : 'Some Url',
	el : 'Id or class where the widget belongs' ,
	events : {
		{object: 'id or class', interaction:'click',action:function(){}},
		{object: 'id or class', interaction:'click',action:function(){}},
		{object: 'id or class', interaction:'click',action:function(){}},
		{object: 'id or class', interaction:'click',action:function(){}}
	},
	links : {
		//What to do when you enter the blog area
		enterBlog : function(){
		},
		//What to do once you leave the blog area
		afterBlog : function(){
		}
	}
});

//Returns current widgets
Loki.currentWidgets();

//Return current controller
Loki.currentController();
