import { Injectable, HttpService } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IFightDto } from './fight.model';

@Injectable()
export class SimulatorService {
  constructor(private httpClient: HttpService) {}

  getAllFighters = () =>
    this.httpClient.get(process.env.SIMULATOR_URL).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(
              throwError({
                status: 404,
                data: { message: 'url no encontrada' },
              }),
            )
          : throwError(error.response),
      ),
    );

  simulateFight = (fighters: IFightDto) =>
    this.httpClient.post(process.env.SIMULATOR_URL, fighters).pipe(
      map(response => response.data),
      catchError(error =>
        !error.response
          ? throwError(
              throwError({
                status: 404,
                data: { message: 'url no encontrada' },
              }),
            )
          : throwError(error.response),
      ),
    );
}
