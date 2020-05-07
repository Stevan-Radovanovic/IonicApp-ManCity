import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/models/player.model';
import { PlayersService } from '../shared/services/players.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  players: Player[] = [];

  constructor(
    private serv: PlayersService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.players = this.serv.getPlayers();
  }

  onClickFavorite() {
    const favorite = this.serv.favouritePlayer;
    if (!favorite) {
      this.alertCtrl
        .create({
          header: 'Oops!',
          message: `You still haven't chosen your favorite player!`,
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
      this.router.navigateByUrl('/players/' + favorite.id);
    }
  }

  ngOnInit() {}
}
