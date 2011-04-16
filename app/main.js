$L(document).ready(function(){
	$L.console.log({type:'start',message:'lets'});
	$L.console.log({type:'rocks',message:'rock'});
	$L.console.log({type:'rocks',message:'really hard'});
	$L.console.logsByType('rocks');
	console.log($L.console.getLogsByType('rocks'));
});