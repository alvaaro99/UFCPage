<?php


$connect = new mysqli('localhost','root','alvaro','FIGHTERS');

$stmt = $connect->prepare('SELECT Weight FROM detalles');
$update = $connect->prepare('UPDATE detalles SET Weight=? WHERE Weight=?;');


$stmt->bind_result($weight);
$stmt->store_result();
$stmt->execute();

$result = [];
while ($stmt->fetch()){
    if($weight !=null ) {
        $weightMod = substr($weight, 0, -5);
        $weightMod = intval($weightMod);

        $peso = $weightMod/2.2046;
        $peso = number_format($peso,0);
        $result[] = ['peso'=>$peso,'weight'=>$weight];

    }
}

foreach ($result as $row){

    var_dump($row);
    $update->bind_param('ss',$row['peso'],$row['weight']);
    if(!$update->execute()) echo 'error '.$update->error.PHP_EOL;
    else echo 'actualizado'.PHP_EOL;
}
