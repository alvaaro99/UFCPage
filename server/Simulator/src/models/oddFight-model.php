<?php

namespace Src\Models;

class OddFight extends Fight{
    public function __construct(Fighter $favorite, Fighter $underdog)
    {
        parent::__construct($favorite, $underdog);
        $this->simulateFight();
    }

    function simulateFight(){
        $this->winner = $this->recreateRounds();
        $this->winBy = $this->getMethodOfWin();
    }


    function recreateRounds(){
        $number = rand(0,4);
        ($number <= 2) ? $this->favorite->wonRounds++ :$this->underdog->wonRounds++;
        if($this->favorite->wonRounds === 10) return $this->favorite;
        if($this->underdog->wonRounds === 10) return $this->underdog;
        return $this->recreateRounds();
    }
}