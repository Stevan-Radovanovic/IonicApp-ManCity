import { Component, OnInit } from '@angular/core';
import { Coach } from '../shared/models/coach.model';
import { CoachesService } from '../shared/services/coaches.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.page.html',
  styleUrls: ['./coaches.page.scss'],
})
export class CoachesPage implements OnInit {
  coaches: Coach[] = [];
  fullListCoaches: Coach[] = [];
  searchBarInput: string;

  constructor(
    private serv: CoachesService,
    private alertCtrl: AlertController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  async ionViewWillEnter() {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait',
    });
    loader.present();
    this.serv.getCoaches().subscribe((response) => {
      this.coaches = response.documents;
      this.serv.coaches = this.coaches;
      this.fullListCoaches = this.coaches;
      console.log('%c ALERT: Coaches Fetched', environment.consoleLog);
      loader.dismiss();
    });
  }

  onCancel() {
    this.coaches = this.fullListCoaches;
  }

  onClear() {
    this.coaches = this.fullListCoaches;
  }

  onChangeSearchValue() {
    if (this.searchBarInput === '') {
      this.coaches = this.fullListCoaches;
      return;
    }

    console.log(this.searchBarInput);
    this.coaches = this.fullListCoaches.filter((coach) =>
      coach.name
        .toLocaleLowerCase()
        .includes(this.searchBarInput.toLocaleLowerCase())
    );
  }

  ngOnInit() {}
}
