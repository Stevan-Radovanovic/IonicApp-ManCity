import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  form: FormGroup;

  generateForm() {
    this.form = new FormGroup({
      user: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.email, Validators.required],
      }),

      pass: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.minLength(8), Validators.required],
      }),
    });
  }

  ionViewWillEnter() {
    console.log('TEST');
    this.generateForm();
  }

  ngOnInit() {
    this.generateForm();
  }

  onLogin() {
    this.auth
      .logIn(this.form.controls.user.value, this.form.controls.pass.value)
      .subscribe(
        (response) => {
          this.auth.token = response.token;
          this.auth.tokenSubject.next(true);
          const expDate = new Date(new Date().getTime() + 3600000);
          this.auth.saveAuthData(this.auth.token, expDate);
          this.auth.isAuth = true;
          this.auth.autoLogOut(36000000);
          console.log('%c ALERT: Logged In', environment.consoleLog);
          this.router.navigateByUrl('/home/players');
        },
        (err) => {
          console.log('%c ERROR: ' + err.message, environment.consoleLogError);
        }
      );
  }
}
