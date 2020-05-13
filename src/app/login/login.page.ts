import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
        validators: [Validators.minLength(8), Validators.required],
      }),

      pass: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.minLength(8), Validators.required],
      }),
    });
  }

  ionViewWillEnter() {
    this.generateForm();
  }

  ngOnInit() {
    this.generateForm();
  }

  onLogin() {
    this.auth.logIn();
  }
}
