<?php


require '../../vendor/autoload.php';
define('ENV', '../.env');

function getFighters(){

$env = parse_ini_file(ENV);

$mongo = new MongoDB\Client('mongodb://'.$env['MONGOURL'].':'.$env['MONGOPORT']);

$collection = $mongo->selectCollection('ranking','ranking');

$result = $collection->find();

$ranking = [];

foreach ($result as $row){
    $ranking[] = ["name"=>$row['fighter'],"weightclass"=>$row['weightclass'],"date"=>$row["date"],"rank"=>$row['rank']];
}

$ranking = json_encode($ranking);
return $ranking;
}
