<?php

// Esto recibe el cuerpo de la peticion que va en JSON porque $_POST
// solo coge las peticiones que van en form-data y en form-urlencoded

require '../models/fighter-model.php';

function simulateFight()
{
    $rawRequest = file_get_contents('php://input');


   $request = json_decode($rawRequest, true);

   $redFighter = new Fighter($request['red']);
   $blueFighter = new Fighter($request['blue']);

   echo 'pepe';

}



