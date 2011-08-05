<?php
$array = array(
	'title'   => 'Blog app spec created',
	'content' => 'The spec its located at github in the poryect blog, now i have something to develop against',
	'tags'    => array('Loki.js','Specs')
);

$json = json_encode($array);

header('Content-type: application/json');
echo $json;