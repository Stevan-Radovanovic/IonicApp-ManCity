import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  form: FormGroup;

  generateForm() {
    this.form = new FormGroup({
      user: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.minLength(8), Validators.required],
      }),

      pass: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.minLength(8), Validators.required],
      }),

      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.email, Validators.required],
      }),
    });
  }

  ionViewWillEnter() {
    this.generateForm();
  }

  ngOnInit() {
    this.generateForm();
  }

  onRegister() {
    this.auth
      .register(
        this.form.controls.email.value,
        this.form.controls.pass.value,
        this.form.controls.user.value
      )
      .subscribe(
        (response) => {
          this.router.navigateByUrl('/login');
          console.log('%c ALERT: Registered', environment.consoleLog);
        },
        (err) => {
          console.log('%c ERROR: ' + err.message, environment.consoleLogError);
        }
      );
  }
}
