<?php declare(strict_types=1);

require '../vendor/autoload.php';

$mongo = new MongoDB\Client('mongodb://localhost:27017');

$collection = $mongo->selectCollection('fighters','ranking');

$result = $collection->find();

$ranking = [];

foreach ($result as $row){
    $ranking[] = ["name"=>$row['fighter'],"weightclass"=>$row['weightclass'],"date"=>$row["date"],"rank"=>$row['rank']];
}

$ranking = json_encode($ranking);
echo $ranking;
