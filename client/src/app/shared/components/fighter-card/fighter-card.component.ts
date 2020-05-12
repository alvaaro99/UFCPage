import { Component, Input } from '@angular/core';
import { IFighter } from '../../models/fighter.model';
@Component({
  selector: 'app-fighter-card',
  templateUrl: './fighter-card.component.html',
  styleUrls: ['./fighter-card.component.css'],
})
export class FighterCardComponent {
  @Input() color: string;
  @Input() fighter: IFighter;
}
