import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Player } from '../../shared/models/player.model';
import { PlayersService } from 'src/app/shared/services/players.service';
@Component({
  selector: 'app-player-modal',
  templateUrl: './player-modal.page.html',
  styleUrls: ['./player-modal.page.scss'],
})
export class PlayerModalPage implements OnInit {
  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private serv: PlayersService
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
      jerseyNumber: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });
  }

  ionViewWillEnter() {
    this.generateForm();
  }

  onAddPlayer() {
    const player: Player = {
      name: this.form.controls.name.value,
      jerseyNumber: +this.form.controls.jerseyNumber.value,
      imageUrl: this.form.controls.imageUrl.value,
    };
    this.serv.postPlayer(player).subscribe(
      (response) => {
        console.log('%c ALERT: Player Saved', environment.consoleLog);
        this.modalCtrl.dismiss();
        console.log('%c ALERT: Modal Dissmised', environment.consoleLog);
      },
      (error) => {
        console.log('%c ERROR: ' + error, environment.consoleLogError);
      }
    );
  }
}
