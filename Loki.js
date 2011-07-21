/* loki-core.js */
(function(a){a.extend=function(b){$.extend(a,b);return this}})($L);
/* loki-events.js */
(function(b){var c=new EventEmitter2({delimiter:"::"});b.extend({Events:c});$(window).hashchange(function(){var a=location.hash.replace("#!/","").replace("#!","").split("/");if(!a[0]||a[0]=="")a[0]="Index";if(!a[1]||a[1]=="")a[1]="Index";Loki.Events.emit("Router::"+a.join("::"))})})($L);
/* loki-ajax.js */
(function(b){b.extend({getData:function(a){var d=$.Deferred();$.ajax({url:config.ajax.baseUrl+a.url,success:function(c){typeof a.success==="function"&&a.success(c);d.resolveWith(null,[c])}});return d.promise()},render:function(a){var d=a.mainArea||config.mainArea;$.when(b.getData({url:a.url}),b.template.load(a.template)).then(function(c,b){$.tmpl(b,c).appendTo(d);a.success(c,b)})}})})($L);
/* loki-console.js */
(function(c){var a=[];c.extend({console:{log:function(b){a.push(b);window.console&&config.debbug&&console.log(b)},logs:function(){window.console&&console.log(a)},getLogs:function(){return a},logsByType:function(b){window.console&&console.log(_.select(a,function(a){return a.type==b}))},getLogsByType:function(b){return _.select(a,function(a){return a.type==b})},flush:function(){a=[]}}})})($L);
/* loki-controller.js */
(function(b){var c={};b.Events.on("Router::*::*",function(a){a=a.split("::");a.shift();c[a[0]]&&c[a[0]][a[1]]?(a=c[a[0]][a[1]],a.before&&a.before(),b.render({url:a.data,template:a.template,success:function(){}})):console.log("No controller or action ",a)});b.extend({Controller:function(a,b){c[a]=b},getControllers:function(){b.console.log(c)}})})($L);
/* loki-template.js */
(function(a){var d={};a.extend({template:{load:function(b){var c=$.Deferred(),a=config.templates.baseUrl+b+"."+config.templates.termination;this.isLoaded(b)?c.resolveWith(null,[b]):$.ajax({url:a,success:function(a){$.template(b,a);d[b]=a;c.resolveWith(null,[b])}});return c.promise()},isLoaded:function(b){return _(d).chain().keys().any(function(a){return a==b}).value()}}})})($L);