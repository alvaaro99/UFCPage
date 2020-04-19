<?php

namespace Src\Models;

class OddFight extends Fight{
    public function __construct(Fighter $red, Fighter $blue)
    {
        parent::__construct($red, $blue);
        $this->simulateFight();
    }

    function simulateFight(){
        $this->winner = $this->recreateRounds();
        $this->winBy = $this->getMethodOfWin();
    }


    function recreateRounds(){
        $number = rand(0,4);
        ($number <= 2) ? $this->red->wonRounds++ :$this->blue->wonRounds++;
        if($this->red->wonRounds === 10) return $this->red;
        if($this->blue->wonRounds === 10) return $this->blue;
        return $this->recreateRounds();
    }
}