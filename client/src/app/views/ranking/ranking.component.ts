import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/shared/services/ranking/ranking.service';
import { CustomException } from 'src/app/shared/exceptions/custom.exception';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  public weightToShow: string;
  public dateToShow: string;
  constructor(public rankingService: RankingService) {}

  ngOnInit(): void {
    this.weightToShow = 'all';
    this.dateToShow = 'all';
    this.getAll();
  }

  getAll() {
    this.rankingService
      .getAll()
      .subscribe({ error: (error) => new CustomException(error.error) });
  }
}
