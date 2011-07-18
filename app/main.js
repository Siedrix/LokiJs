$(document).ready(function(){
	$L.console.log({type:'start',message:'lets rock'});
	
	setTimeout(function(){
		$L.render({
			url:'example.php',
			template:'example',
			success:function(data){
				console.log('loaded first time');
				console.log(data);
			}
		});
	},500);

	setTimeout(function(){
		$L.render({
			url:'example.php',
			template:'example',
			success:function(data){
				console.log('loaded second time');
				console.log(data);
			}
		});
	},1500);
});