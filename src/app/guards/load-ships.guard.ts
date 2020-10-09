import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoadShipsGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (!this.authService.isLoggedIn) this.router.navigate(['/auth/login']);
    return true;
  }
}
