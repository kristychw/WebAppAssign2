//  Student’s Name: Hin Wa Chan
//  StudentID: 301251828
//  Date: 7 Jul 2023

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'isLoggedIn';

  constructor() {}

  login(res: string) {
    // localStorage.setItem(this.storageKey, 'true');
    localStorage.setItem('userToken', JSON.stringify(res))
  }

  logout() {
    localStorage.removeItem('userToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('userToken');
  }

  getLoginInfo(): void {
    const isLoggedIn = this.isAuthenticated();
    console.log('Login Information:');
    console.log('Is Logged In:', isLoggedIn);
  }
}
