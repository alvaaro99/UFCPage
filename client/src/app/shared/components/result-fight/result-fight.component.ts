import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFight } from '../../models/fight.model';

@Component({
  selector: 'app-result-fight',
  templateUrl: './result-fight.component.html',
  styleUrls: ['./result-fight.component.css'],
})
export class ResultFightComponent {
  @Input() resultFight: IFight = null;
  @Output() onNewFight = new EventEmitter();
  @Output() onRepeatFight = new EventEmitter();

  repeatFight() {
    this.onRepeatFight.emit('repeat');
  }

  newFight() {
    this.onNewFight.emit('new');
  }
}
