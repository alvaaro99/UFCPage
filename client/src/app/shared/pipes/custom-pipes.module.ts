import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRankingPipe } from './date-ranking/date-ranking.pipe';
import { DateToAgePipe } from './date-to-age/date-to-age.pipe';
import { WeightRankingPipe } from './weight-ranking/weight-ranking.pipe';
import { NoRepeatPipe } from './no-repeat/no-repeat.pipe';

@NgModule({
  declarations: [
    DateRankingPipe,
    DateToAgePipe,
    WeightRankingPipe,
    NoRepeatPipe,
  ],
  imports: [CommonModule],
  exports: [DateRankingPipe, DateToAgePipe, WeightRankingPipe, NoRepeatPipe],
})
export class CustomPipesModule {}
