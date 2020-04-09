<?php

function getFighters(){
    $connect = new \mysqli('localhost','root','alvaro','FIGHTERS');

    $select = $connect->prepare('SELECT * FROM detalles');
    $select->bind_result($name,$height,$wheight,$reach,$stance,$birthdate);
    $select->store_result();
    $select->execute();
    $result = [];
    while ($select->fetch()){
        $result[] = ["name"=>$name,"height"=>$height,"weight"=>$wheight,"reach"=>$reach,"stance"=>$stance,"birthdate"=>$birthdate];
    }
    return json_encode($result);
}

getFighters();