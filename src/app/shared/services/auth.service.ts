import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLogedIn = false;

  logIn() {
    console.log('%c ALERT: Logged In', environment.consoleLog);
    this.isLogedIn = true;
    this.router.navigateByUrl('/home');
  }

  logOut() {
    console.log('%c ALERT: Logged Out', environment.consoleLog);
    this.isLogedIn = false;
    this.router.navigateByUrl('/login');
  }

  register() {
    console.log('%c ALERT: Registered', 'color:pink; background-color: black;');
    this.router.navigateByUrl('/login');
  }
}
