<?php

require '../../vendor/autoload.php';
define('ENV', '../.env');

class Fighter{

    public $name;
    public $weightclass;
    public $rank;

    public function __construct($fighter)
    {
        $this->name = $fighter['name'];
        $this->weightclass = $fighter['weightclass'];
        $this->rank = $fighter['rank'];
    }

}