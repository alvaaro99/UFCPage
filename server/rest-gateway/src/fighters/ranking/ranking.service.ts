import { Injectable, HttpService } from '@nestjs/common';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class RankingService {
  constructor(private httpClient: HttpService) {}

  getAll = () =>
    this.httpClient.get(process.env.RANKING_URL).pipe(
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
