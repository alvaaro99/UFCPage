import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { RankingService } from './ranking.service';
import { IFighter } from '../fighter.model';
import { IAxiosError } from 'src/exceptions/axios.error';

@Controller('ranking')
export class RankingController {
  constructor(private rankingService: RankingService) {}

  @Get()
  getFighters(@Res() res: Response) {
    const ranking$ = this.rankingService.getAll();

    ranking$.subscribe(
      (fighters: IFighter[]) => res.status(HttpStatus.OK).send(fighters),
      (error: IAxiosError) => res.status(error.status).send(error.data),
    );
  }
}
