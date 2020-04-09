<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'on');

require 'getFighters.php';
require 'simulator.php';


if($_SERVER['REQUEST_METHOD'] == 'GET') echo getFighters();
if($_SERVER['REQUEST_METHOD'] == 'POST') echo simulateFight();