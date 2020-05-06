import { Injectable } from '@angular/core';
import { IFighter } from '../../models/fighter.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SimulatorService {
  fighters: IFighter[] = [];
  constructor(private http: HttpClient) {}

  getAll = () =>
    this.http
      .get(environment.GATEWAY_URL + environment.ENDPOINT_SIMULATOR)
      .pipe(map((fighters: IFighter[]) => (this.fighters = fighters)));
}
