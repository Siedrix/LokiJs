//Checks config file and load correct files...
Loki.init({
	enviroment : '', //Sets a production or development enviroment, needs a object with the name of the state
					 //Has all dependencies, modules and application scripts needed 
	debbug : '',	 //HAs debuggin information for console and event logging
	initialAction : 'Blog::Index', //If hash is empty, what is the first state
	mainArea : '#main'	//Main area to render, controllers can overwrite it
});

//Internals
//This is how a new LokiJs "object" should be define
var Controller = function(spec) {
	//If doesnt Inherets, use:
	//var that = {};
	var that = $L.Contructors.State(spec);

	... some code and adittional functions

	return that;
}

//Loki extend...
Loki.extend('Controller',Controller);
//Adds Loki.Controller <-- points to that;
//Adds Loki.Contructors.Controller <-- points to Controller

//Need a event manager
//Extends EventEmitter2 into LokiJs
Loki.Events.hook('foo::*',function(){
	.. log some events
});
//Adds listener for debugging
//Short hand for function(data){console.log(data)};
Loki.Events.log('foo::*');

//LokiJs needs a StateManager, a Promise Object and a State Factory
//From Samarium specs
Loki.States // State Manager(Samarium.Manager)
Loki.States.get // returns a State Factory, use to build controllers and widgets
//Builded on top of Events
//States should be able to log, but this should be able to be taken out by config

//Make diference "on" and "after"
//Need a Router in LokiJs
//Equivalent to Samarium after
Loki.Router.hook('Blog::Single',function(){
	... some action ...
});
//Use full for widgets to get data on creation that was been already loaded

//Similar to trigger
//Changes hash and triggers event
//But uses a http method [get,post,put,delete]
Loki.Router.get('Blog::Single');

//Return user history
//This should be easy to program after States
//Shoud be a setting for "No history"
Loki.Router.history();

//Returns Routes in Use and hooks to every Route
//Give power to debbug and map an application
Loki.Router.describe();

//Controllers are build on top of Router
//Every controller is binded on a Name Space on the router
//Registes a controller...
//Controller Should inhered from States
//All urls to  !/RegularController/ are binded to this controller
Loki.Controller.set('RegularController',{
	//Lives in !/RegularController/Single/
	'Single': {
		//But uses a http method [get,post,put,delete], default 'get'
		'method': 'get'
		//Now Single url is 
		// !/Blog/Single/Some name
		'params' : '{:name}'
		//where to get data
		//Can use '{:name}' an gets parameters binded
		'data': 'Someurl',
		//What template should i use to render this controller
		'template' : 'Some Template',
		//What widgets are needed for this controller
		//If data is an array, it uses the template per item
		'widgets' : ['SomeWidget'],
		//Binds events to template elements
		//Uses jQuery Delegate
		'events' : [
			{object: 'id or class', interaction:'click',action:function(){}},
			{object: 'id or class', interaction:'click',action:function(){}},
			{object: 'id or class', interaction:'click',action:function(){}},
			{object: 'id or class', interaction:'click',action:function(){}}
		],
		//What to do before this action is procesed
		before : function(){
			
		},
		//What to do after this action
		after : function(){
			
		}
	},
	//Controllers can have a lot of different actions
	'List' : {
		...
	}
});
//Return current controller and currect action...
Loki.Controller.current();

//Widgets are build on top of States
//Each widget is a State Factory
//Widgets can hook to the router
//Registes a widget
Loki.Widget.set('SomeWidget',{
	//Runs when the widget is created
	init : function(){
		
	}
	//What template should i use to render this widget
	template : 'SomeWidget template info',
	//What data should be use to render this controller
	data : 'Some Url',
	//Where to render this widget
	el : 'Id or class where the widget belongs',
	//Binds events to template elements
	//Uses jQuery Delegate
	events : {
		{object: 'id or class', interaction:'click',action:function(){}},
		{object: 'id or class', interaction:'click',action:function(){}},
		{object: 'id or class', interaction:'click',action:function(){}},
		{object: 'id or class', interaction:'click',action:function(){}}
	},
	//What states does this widget has...
	states : {
		'StateName' : function(){
			... actions ...	
		}
	}
	hooks  : {
		//What to do when you enter the blog area
		enterBlog : function(){
			this.go('State Name', aditionalInfo)
		},
		//What to do once you leave the blog area
		afterBlog : function(){
		}
	}
});

Loki.Widgets.current();
//Returns current widgets
//You can ask what state of every widget

Loki.Widgets.loaded();
//Returns loaded widgets

//LokiJs template manager
//Preatty much what it was build on devhouse, plus localstorage

//LokiJs ajax manager
//functions needs better semantics...
Loki.Ajax.fetch('url',callback);



