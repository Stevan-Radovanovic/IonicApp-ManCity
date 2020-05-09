import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/shared/models/coach.model';
import { ActivatedRoute } from '@angular/router';
import { CoachesService } from 'src/app/shared/services/coaches.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.page.html',
  styleUrls: ['./coach-detail.page.scss'],
})
export class CoachDetailPage implements OnInit {

  coach :Coach  = null;

  constructor(
    private route: ActivatedRoute,
    private serv: CoachesService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      console.log(paramMap);
      this.coach = this.serv.getCoach(+paramMap.get('id'));
    });
  }

  onFavorite() {
    if (
      this.serv.favoriteCoach &&
      this.serv.favoriteCoach.id === this.coach.id
    ) {
    }

    this.alertCtrl
      .create({
        header: 'Favorite Coach',
        message: 'Do you want to set this as your favorite coach?',
        buttons: [
          {
            text: `Yes, I'm sure`,
            handler: () => {
              this.serv.favoriteCoach = this.coach;
              this.serv.hasFavorite = true;
            },
          },
          { text: 'Nope!', role: 'Cancel' },
        ],
      })
      .then((alertCtrl) => {
        alertCtrl.present();
      });
  }

}
