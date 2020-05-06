import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFighter } from '../../models/fighter.model';

@Component({
  selector: 'app-select-fighter',
  templateUrl: './select-fighter.component.html',
  styleUrls: ['./select-fighter.component.css'],
})
export class SelectFighterComponent implements OnInit {
  @Input() fighters: IFighter[];
  @Output() onSelectFighter = new EventEmitter<IFighter>();
  fighterSelected: IFighter;

  constructor() {
    this.fighterSelected = null;
  }

  emitFighter() {
    this.onSelectFighter.emit(this.fighterSelected);
  }

  ngOnInit(): void {}
}
