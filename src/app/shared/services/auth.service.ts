import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  public email: string;
  public token: string;
  public isAuth = false;
  public tokenSubject = new BehaviorSubject(false);
  public timer: any;

  register(mail: string, pass: string, username: string) {
    const user: User = { email: mail, password: pass, userName: username };
    return this.http.post('http://localhost:3000/users/register', user);
  }

  logIn(mail: string, pass: string) {
    const user: User = { email: mail, password: pass };
    localStorage.setItem('email', user.email);
    console.log(user);
    return this.http.post<{ token: string }>(
      'http://localhost:3000/users/login',
      user
    );
  }

  logOut() {
    clearTimeout(this.timer);
    this.token = null;
    this.isAuth = false;
    this.tokenSubject.next(false);
    this.clearAuthData();
    this.router.navigateByUrl('/login');
    console.log('%c ALERT: Logged Out', environment.consoleLog);
  }

  autoLogOut(interval: number) {
    this.timer = setTimeout(() => {
      this.logOut();
    }, interval);
  }

  autoLogIn() {
    const authInfo = this.getAuthData();
    if (!authInfo) {
      return;
    }
    const now = new Date();
    const expiresIn = authInfo.expDate.getTime() - now.getTime();
    console.log(expiresIn);
    if (expiresIn > 0) {
      this.token = authInfo.token;
      this.isAuth = true;
      this.autoLogOut(expiresIn);
      this.tokenSubject.next(true);
    } else {
      this.logOut();
    }
  }

  saveAuthData(token: string, expDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expDate', expDate.toISOString());
  }

  clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expDate');
    localStorage.removeItem('email');
  }

  getAuthData() {
    const tok = localStorage.getItem('token');
    const expDate = localStorage.getItem('expDate');
    if (!tok || !expDate) {
      return;
    }

    return {
      token: tok,
      expDate: new Date(expDate),
    };
  }
}

/*
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
  }*/
