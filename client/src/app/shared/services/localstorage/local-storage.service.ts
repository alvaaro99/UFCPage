import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveToken = (token: string) => localStorage.setItem('authToken', token);

  getToken = () => localStorage.getItem('authToken');
}
