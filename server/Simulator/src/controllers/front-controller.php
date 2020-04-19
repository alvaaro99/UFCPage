<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require '../../vendor/autoload.php';
require 'getFighters.php';
require 'simulator-controller.php';


if($_SERVER['REQUEST_METHOD'] == 'GET') echo getFighters();
if($_SERVER['REQUEST_METHOD'] == 'POST') var_dump(simulateFight());
