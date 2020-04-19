<?php

namespace Src\Models;
class Fight{
    public $red;
    public $blue;
    public $winBy;
    public $winner;


    public function __construct(Fighter $red, Fighter $blue)
    {
        $this->red = $red;
        $this->blue = $blue;
    }

    function getMethodOfWin(){
        $difference = abs($this->red->wonRounds - $this->blue->wonRounds);

        if($difference>=8) return WinByMethods::SUBMISSION;
        if($difference>=6) return WinByMethods::KO;
        if($difference>=3) return WinByMethods::TKO;
        return WinByMethods::DECISION;
    }
}