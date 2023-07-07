import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../business-contacts/auth.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  validateCredentials(username: string, password: string) {
    return this.http.post<any>(
      'https://web-app-assign2-backend.vercel.app/users',
      {
        // return this.http.post<any>('http://localhost:4000/users', {
        username,
        password,
      }
    );
  }

  onLogin(loginForm: NgForm) {
    if (loginForm.valid) {
      console.log(loginForm.value);
      // Make an HTTP POST request to validate credentials
      this.http
        .post<any>('https://web-app-assign2-backend.vercel.app/users', {
          // .post<any>('http://localhost:4000/users', {
          username: this.username,
          password: this.password,
        })
        .subscribe(
          (response) => {
            console.log('login successful');
            // Successful login
            // Set the login status
            this.authService.login(response);
            // Log the login information from local storage
            this.authService.getLoginInfo();
            // Redirect to the Business Contacts List component
            this.router.navigate(['/businessContact']);
          },
          (error) => {
            // Handle invalid credentials case
            console.log('Please put the correct login');
            console.error(error);
            // Show appropriate error message to the user
          }
        );
    }
  }
}
