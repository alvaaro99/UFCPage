import { Component, OnInit } from '@angular/core';
import { FightersService } from 'src/app/shared/services/fighters/fighters.service';
import { CustomException } from 'src/app/shared/exceptions/custom.exception';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  public weightToShow: string;
  public dateToShow: string;

  constructor(public fightersService: FightersService) {}

  ngOnInit(): void {
    this.weightToShow = 'all';
    this.dateToShow = 'all';
    this.getAll();
  }

  getAll() {
    if (this.fightersService.ranking.length === 0)
      this.fightersService
        .getAll()
        .subscribe({ error: (error) => new CustomException(error.error) });
  }
}
