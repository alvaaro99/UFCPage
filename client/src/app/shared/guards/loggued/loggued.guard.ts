import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UsersService } from '../../services/users/users.service';

@Injectable({
  providedIn: 'root',
})
export class LogguedGuard implements CanActivate {
  constructor(private userService: UsersService, private router: Router) {}
  canActivate() {
    if (this.userService.isLoggued) return true;
    this.router.navigateByUrl('/login');
    return false;
  }
}
