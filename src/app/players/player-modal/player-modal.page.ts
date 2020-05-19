import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.page.html',
  styleUrls: ['./player-modal.page.scss'],
})
export class PlayerModalPage implements OnInit {
  form: FormGroup;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.generateForm();
  }

  onDismissModal() {
    this.modalCtrl.dismiss();
    console.log('%c ALERT: Modal Dissmised', environment.consoleLog);
  }

  generateForm() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),

      imageUrl: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      jerseyNumber: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });
  }

  ionViewWillEnter() {
    this.generateForm();
  }
}
