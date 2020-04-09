<?php

// Esto recibe el cuerpo de la peticion que va en JSON porque $_POST
// solo coge las peticiones que van en form-data y en form-urlencoded

function simulateFight()
{
    $rawRequest = file_get_contents('php://input');

    return $rawRequest;
   /* $request = json_decode($rawRequest, true);

    var_dump($request);*/

}




