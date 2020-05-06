import { Injectable } from '@angular/core';
import { IFighter } from '../../models/fighter.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SimulatorService {
  fighters: IFighter[];
  constructor(private http: HttpClient) {}

  getAll = () => this.http;
}
