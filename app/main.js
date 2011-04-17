$L(document).ready(function(){
	$L.console.log({type:'start',message:'lets rock'});
	
	$L.render({
		url:'example.php',
		template:'example',
		success:function(data){
			console.log('loaded first time');
		}
	});

	setTimeout(function(){
		$L.render({
			url:'example.php',
			template:'example',
			success:function(data){
				console.log('loaded second time');
				//console.log(data);
			}
		});
	},500);
});