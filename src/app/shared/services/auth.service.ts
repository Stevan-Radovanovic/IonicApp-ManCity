import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLogedIn = false;

  logIn() {
    this.isLogedIn = true;
    this.router.navigateByUrl('/home');
  }

  logOut() {
    this.isLogedIn = false;
    this.router.navigateByUrl('/login');
  }
}
