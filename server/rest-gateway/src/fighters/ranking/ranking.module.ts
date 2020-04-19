import { Module, HttpModule } from '@nestjs/common';
import { RankingController } from './ranking.controller';
import { RankingService } from './ranking.service';

@Module({
  imports: [HttpModule],
  controllers: [RankingController],
  providers: [RankingService],
})
export class RankingModule {}
