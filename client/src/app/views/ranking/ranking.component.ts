import { Component, OnInit } from '@angular/core';
import { IFighter } from 'src/app/shared/models/fighter.model';
import { RankingService } from 'src/app/shared/services/ranking/ranking.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  public weightToShow: string;
  constructor(public rankingService: RankingService) {}

  ngOnInit(): void {
    this.weightToShow = 'all';
  }
}
