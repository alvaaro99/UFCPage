import { Module } from '@nestjs/common';
import { RankingModule } from './ranking/ranking.module';
import { SimulatorModule } from './simulator/simulator.module';

@Module({
  imports: [RankingModule, SimulatorModule]
})
export class FightersModule {}
