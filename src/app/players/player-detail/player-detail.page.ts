import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../shared/services/players.service';
import { Player } from '../../shared/models/player.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss'],
})
export class PlayerDetailPage implements OnInit {
  player: Player = null;

  constructor(
    private route: ActivatedRoute,
    private serv: PlayersService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    console.log(this.player);
    this.route.paramMap.subscribe((paramMap) => {
      console.log(paramMap);
      this.player = this.serv.getPlayer(paramMap.get('id'));
      console.log(this.player);
    });
  }

  onFavorite() {
    if (
      this.serv.favouritePlayer &&
      this.serv.favouritePlayer._id === this.player._id
    ) {
    }

    this.alertCtrl
      .create({
        header: 'Favorite Player',
        message: 'Do you want to set this as your favorite player?',
        buttons: [
          {
            text: `Yes, I'm sure`,
            handler: () => {
              this.serv.favouritePlayer = this.player;
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
