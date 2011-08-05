<?php
$array = array(
	'title'   => 'Loki.js first draft',
	'content' => 'Loki.js first draft its working, has module: ajax(renderer), console, templates, events and router. Next milestone is controllers and widgets',
	'tags'		  => array('Loki.js','Code') 
);

$json = json_encode($array);

header('Content-type: application/json');
echo $json;