<?php


$connect = new mysqli('localhost','root','alvaro','FIGHTERS');

$stmt = $connect->prepare('SELECT Reach FROM detalles');
$update = $connect->prepare('UPDATE detalles SET Reach=? WHERE Reach=?;');


$stmt->bind_result($reach);
$stmt->store_result();
$stmt->execute();

$result = [];
while ($stmt->fetch()){
    if($reach !=null ) {
        $reachMod = substr($reach, 0, -1);
        $reachMod = intval($reachMod);
        $alcance = $reachMod*2.54;
        $alcance = number_format($alcance,0);
        $alcance = $alcance/100;

        $result[] = ['alcance'=>$alcance,'reach'=>$reach];

    }
}

foreach ($result as $row){
    $update->bind_param('ss',$row['alcance'],$row['reach']);
    if(!$update->execute()) echo 'error '.$update->error.PHP_EOL;
    else echo 'actualizado'.PHP_EOL;
}
