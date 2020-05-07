<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require '../../vendor/autoload.php';
require 'getFighters.php';
require 'simulator-controller.php';


if($_SERVER['REQUEST_METHOD'] == 'GET') echo getFighters();
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fight = simulateFight();
    $winner = $fight->winner;
    ($winner === $fight->red) ? $loser = $fight->blue : $loser = $fight->red;
    echo json_encode(['winner'=>$winner,'loser'=>$loser,'winBy'=>$fight->winBy]);
}
