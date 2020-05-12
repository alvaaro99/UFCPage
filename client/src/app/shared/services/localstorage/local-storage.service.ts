import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  keyToken: string = 'authToken';

  saveToken = (token: string) => localStorage.setItem(this.keyToken, token);

  getToken = () => localStorage.getItem(this.keyToken);

  removeToken = () => localStorage.removeItem(this.keyToken);
}
