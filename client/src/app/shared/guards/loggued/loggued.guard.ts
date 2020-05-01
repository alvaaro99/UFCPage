import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { UsersService } from '../../services/users/users.service';
import { LocalStorageService } from '../../services/localstorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LogguedGuard implements CanActivate {
  constructor(private router: Router, private userService: UsersService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isLoggued) return true;
    this.router.navigate(['/login'], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
