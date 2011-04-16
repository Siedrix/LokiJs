$L(document).ready(function(){
	$L.console.log({type:'start',message:'lets rock'});
	
	$L.ajax({
		url:'example.php',
		template:'dance',
		success:function(data){
			console.log(data);
		}
	})
});