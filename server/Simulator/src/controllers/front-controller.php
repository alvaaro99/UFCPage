<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');

require 'getFighters.php';
require 'simulator-controller.php';


if($_SERVER['REQUEST_METHOD'] == 'GET') echo getFightersDetails();
if($_SERVER['REQUEST_METHOD'] == 'POST') echo simulateFight();