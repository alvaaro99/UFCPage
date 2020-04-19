import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { SimulatorService } from './simulator.service';
import { Response } from 'express';
import { IFighter } from '../fighter.model';
import { IAxiosError } from 'src/exceptions/axios.error';
import { IFightDto, IFight } from './fight.model';

@Controller('simulator')
export class SimulatorController {
  constructor(private simulatorService: SimulatorService) {}

  @Get()
  getAll(@Res() res: Response) {
    const fighters$ = this.simulatorService.getAllFighters();

    fighters$.subscribe(
      (fighters: IFighter[]) => res.status(HttpStatus.OK).send(fighters),
      (error: IAxiosError) => res.status(error.status).send(error.data),
    );
  }

  @Post()
  simulateFight(@Body() fighters: IFightDto, @Res() res: Response) {
    const fight$ = this.simulatorService.simulateFight(fighters);

    fight$.subscribe(
      (fight: IFight) => res.status(HttpStatus.OK).send(fight),
      (error: IAxiosError) => res.status(error.status).send(error.data),
    );
  }
}
