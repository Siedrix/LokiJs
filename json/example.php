<?php
$array = array(
	'action' => 'eventually you will have a server to dance with'
);

$json = json_encode($array);

header('Content-type: application/json');
echo $json;