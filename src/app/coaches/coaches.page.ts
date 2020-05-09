import { Component, OnInit } from '@angular/core';
import { Coach } from '../shared/models/coach.model';
import { CoachesService } from '../shared/services/coaches.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.coaches = this.serv.getCoaches();
    this.fullListCoaches = this.serv.getCoaches();
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
    this.coaches = this.coaches.filter((coach) =>
      coach.name
        .toLocaleLowerCase()
        .includes(this.searchBarInput.toLocaleLowerCase())
    );
  }

  onClickFavorite() {
    const favorite = this.serv.favoriteCoach;
    if (!favorite) {
      this.alertCtrl
        .create({
          header: 'Oops!',
          message: `You still haven't chosen your favorite coach!`,
          buttons: [
            {
              text: `Ok`,
            },
          ],
        })
        .then((alertCtrl) => {
          alertCtrl.present();
        });
    } else {
      this.router.navigateByUrl('/coaches/' + favorite.id);
    }
  }

  ngOnInit() {}
}
