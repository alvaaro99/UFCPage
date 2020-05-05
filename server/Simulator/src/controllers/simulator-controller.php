<?php

// Esto recibe el cuerpo de la peticion que va en JSON porque $_POST
// solo coge las peticiones que van en form-data y en form-urlencoded

use Src\Models\EvenFight;
use Src\Models\Fighter;
use Src\Models\OddFight;

function simulateFight()
{
    $rawRequest = file_get_contents('php://input');


    $request = json_decode($rawRequest, true);

    $redFighter = new Fighter($request['red']);
    $blueFighter = new Fighter($request['blue']);



    if($redFighter->rank === $blueFighter->rank ) return new EvenFight($redFighter,$blueFighter);
    if($redFighter->rank > $blueFighter->rank) return new OddFight($redFighter,$blueFighter);
    if($blueFighter->rank > $redFighter->rank) return new OddFight($blueFighter,$redFighter);

}



