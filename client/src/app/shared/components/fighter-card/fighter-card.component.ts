import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-fighter-card',
  templateUrl: './fighter-card.component.html',
  styleUrls: ['./fighter-card.component.css'],
})
export class FighterCardComponent implements OnInit {
  @Input() color: string;
  @Input() fighter: any;

  constructor() {}

  ngOnInit(): void {}
}
