<?php


namespace Src\Models;


class Fighter{

    public $name;
    public $weightclass;
    public $rank;
    public $birthdate;
    public $height;
    public $wonRounds;
    public $color;

    public function __construct($fighter)
    {
        $this->name = $fighter['name'];
        $this->weightclass = $fighter['weightclass'];
        $this->rank = (isset($fighter['rank']))?$fighter['rank']: 0;
        $this->birthdate = (isset($fighter['birthdate']))?$fighter['birthdate']: null;
        $this->height = (isset($fighter['height'])) ?$fighter['height']: null;
        $this->wonRounds = 0;
    }

}
