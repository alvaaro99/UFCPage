import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { IFighter } from '../../models/fighter.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RankingService {
  ranking: IFighter[] = [];
  constructor(private httpService: HttpService) {
    this.getAll();
  }

  getAll() {
    this.httpService
      .get(environment.GATEWAY_URL + 'ranking')
      .pipe(map((fighters: IFighter[]) => (this.ranking = fighters)))
      .subscribe(
        () => console.log('bin'),
        (eror) => console.log(eror)
      );
  }
}
