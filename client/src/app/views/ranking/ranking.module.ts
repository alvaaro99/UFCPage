import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from '../../views/ranking/ranking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipesModule } from 'src/app/shared/pipes/custom-pipes.module';
import { RankingRoutingModule } from './ranking-routing.module';

@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule,
    RankingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipesModule,
  ],
})
export class RankingModule {}
