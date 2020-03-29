<?php


$connect = new mysqli('localhost','root','alvaro','FIGHTERS');

$stmt = $connect->prepare('SELECT Height FROM detalles');
$update = $connect->prepare('UPDATE detalles SET Height=? WHERE Height=?;');


$stmt->bind_result($height);
$stmt->store_result();
$stmt->execute();

$result = [];
while ($stmt->fetch()){
    if($height !=null ) {
        $heightMod = substr($height, 0, -1);
        $heightMod = explode("'", $heightMod);
        $heightMod[0] = intval($heightMod[0]);
        $heightMod[1] = intval($heightMod[1]);
        $altura = ($heightMod[0]* 0.3048)+($heightMod[1]*0.0254);
        $altura = number_format($altura,2);


        $result[] = ['altura'=>$altura,'height'=>$height];

    }
}

foreach ($result as $row){
    $update->bind_param('ss',$row['altura'],$row['height']);
        if(!$update->execute()) echo 'error '.$update->error.PHP_EOL;
        else echo 'actualizado'.PHP_EOL;
}
