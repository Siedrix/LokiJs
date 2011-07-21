//This is the spec for who a blog
//Config file

	initialAction : 'Blog::List', //If hash is empty, what is the first state
	mainArea : '#main'	//Main area to render, controllers can overwrite it

// Blog Controller
// This defines Single and List(index)
//
Loki.Controller.set('Blog',{
	//Lives in !/Blog/List
	'List' : {
		'data'     : 'blog/all',
		'template' : 'blog/itemSmall',
		'widgets'  : ['Sidebar'],
		'events'   : {
			{
				object      : '.view', 
				interaction : 'click',
				action      : function(){
					Loki.Router.get('Blog::Single::'+this.id)
				}
			},
		}, 
		before : function(){
			//Cleans Main area
			$(config.mainArea).html('')
		},
	},
//Data and template
//Data
[
	{id,title,desc,content,tags},
	{id,title,desc,content,tags}
]

//Template
<div class="item">
	<h4> ${title} </h4>
	<p> ${desc} </p>
	<p>
	{{each tags}}
       <span>${$value} </span>
    {{/each}}
    </p>
    <p><a class="view">View Blogpost</a></p>
</div>
//End Data and template
	//Lives in !/Blog/Single/:id
	'Single': {
		'params'   : '{:id}'
		'data'     : 'blog/single/{:id}',
		'template' : 'blog/item',
		'widgets' : ['Sidebar','Tags'],
		before : function(){
			//Cleans Main area
			$(config.mainArea).html('')			
		}
	}
//Data and template
//Data
{title,desc,content,tags},

//Template
<div class="item">
	<h2> ${title} </h2>
	<div> {{html content}} </div>
</div>
//End Data and template
});

Loki.Widget.set('Sidebar',{
	template : 'Sidebar',
	el       : '#sidebar',
	events : {
		{
			object: 'ul li', 
			interaction:'click',
			action:function(){
				... go to blog post
			}
		},
	},
	states : {
		'Open' : function(data){
			Loki.render(data,'list template');
		}
	}
	hooks  : {
		//What to do when you enter the blog area
		enterBlog : function(data){
			this.go('Open',data)
		},
		//What to do once you leave the blog area
		afterBlog : function(){

		}
	}
});

Loki.Widget.set('Tags',{
	...
})


