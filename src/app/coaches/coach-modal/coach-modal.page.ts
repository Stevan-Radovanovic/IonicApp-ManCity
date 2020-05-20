import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Coach } from 'src/app/shared/models/coach.model';
import { ModalController } from '@ionic/angular';
import { CoachesService } from 'src/app/shared/services/coaches.service';

@Component({
  selector: 'app-coach-modal',
  templateUrl: './coach-modal.page.html',
  styleUrls: ['./coach-modal.page.scss'],
})
export class CoachModalPage implements OnInit {
  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private serv: CoachesService
  ) {}

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
    });
  }

  ionViewWillEnter() {
    this.generateForm();
  }

  onAddCoach() {
    const coach: Coach = {
      name: this.form.controls.name.value,

      imageUrl: this.form.controls.imageUrl.value,
    };
    this.serv.postCoach(coach).subscribe(
      (response) => {
        console.log('%c ALERT: Coach Saved', environment.consoleLog);
        this.modalCtrl.dismiss();
        console.log('%c ALERT: Modal Dissmised', environment.consoleLog);
      },
      (error: Error) => {
        console.log('%c ERROR: ' + error.message, environment.consoleLogError);
      }
    );
  }
}
