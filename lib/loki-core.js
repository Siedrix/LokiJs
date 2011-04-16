(function(global){
	var Loki = jQuery.sub();
	
	Loki.console = {};
	Loki.ajax = {};
	Loki.templates = {};
	
	global.Loki = Loki;
	global.$L = Loki;
})(typeof window === 'undefined' ? this : window);