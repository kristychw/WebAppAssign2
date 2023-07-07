import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
    // Check if the user is authenticated
    const isAuthenticated = this.authService.isAuthenticated();

    if (!isAuthenticated) {
      // Redirect the user to the login page if not authenticated
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
