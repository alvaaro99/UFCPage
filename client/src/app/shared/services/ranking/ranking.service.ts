import { Injectable } from '@angular/core';
import { IFighter } from '../../models/fighter.model';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  ranking: IFighter[] = [];
  constructor(private httpService: HttpClient) {}

  getAll = () =>
    this.httpService
      .get(environment.GATEWAY_URL + environment.ENDPOINT_RANKING)
      .pipe(tap((fighters: IFighter[]) => (this.ranking = fighters)));
}
