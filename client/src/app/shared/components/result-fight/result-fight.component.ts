import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFight } from '../../models/fight.model';

@Component({
  selector: 'app-result-fight',
  templateUrl: './result-fight.component.html',
  styleUrls: ['./result-fight.component.css'],
})
export class ResultFightComponent implements OnInit {
  @Input() resultFight: IFight = null;
  @Output() onNewFight = new EventEmitter();
  @Output() onRepeatFight = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  repeatFight() {
    this.onRepeatFight.emit('repeat');
  }

  newFight() {
    this.onNewFight.emit('new');
  }
}
