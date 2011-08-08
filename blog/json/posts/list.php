<?php
$array = array(
	array(
		'id'		  => 1,
		'title'       => 'Blog app spec created',
		'description' => 'Created a spec of how Loki.js blog ui should work',
		'tags'		  => array('Loki.js','Specs')
	),
	array(
		'id'		  => 2,
		'title'       => 'Loki.js first draft',
		'description' => 'Eventually you will have a server to dance with',
		'tags'		  => array('Loki.js','Code')
	),
);

$json = json_encode($array);

header('Content-type: application/json');
echo $json;
