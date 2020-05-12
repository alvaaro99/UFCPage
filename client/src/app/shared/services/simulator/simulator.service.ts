import { Injectable } from '@angular/core';
import { IFighter } from '../../models/fighter.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../localstorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SimulatorService {
  fighters: IFighter[] = [];
  constructor(
    private http: HttpClient,
    private storageService: LocalStorageService
  ) {}

  getAll = () =>
    this.http
      .get(environment.GATEWAY_URL + environment.ENDPOINT_SIMULATOR, {
        headers: { authorization: this.storageService.getToken() },
      })
      .pipe(map((fighters: IFighter[]) => (this.fighters = fighters)));

  simulate = (red: IFighter, blue: IFighter) =>
    this.http.post(
      environment.GATEWAY_URL + environment.ENDPOINT_SIMULATOR,
      {
        red: { ...red, color: 'red' },
        blue: { ...blue, color: 'blue' },
      },
      { headers: { authorization: this.storageService.getToken() } }
    );
}
