import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from '../../views/ranking/ranking.component';
import { WeightRankingPipe } from '../../shared/pipes/weight-ranking/weight-ranking.pipe';
import { DateRankingPipe } from '../../shared/pipes/date-ranking/date-ranking.pipe';
import { NoRepeatPipe } from '../../shared/pipes/no-repeat/no-repeat.pipe';

@NgModule({
  declarations: [
    RankingComponent,
    WeightRankingPipe,
    DateRankingPipe,
    NoRepeatPipe,
  ],
  imports: [CommonModule],
})
export class RankingModule {}
