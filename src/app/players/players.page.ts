import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/models/player.model';
import { PlayersService } from '../shared/services/players.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  players: Player[] = [];
  fullListPlayers: Player[] = [];
  searchBarInput: string;

  constructor(
    private serv: PlayersService,
    private alertCtrl: AlertController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ionViewWillEnter() {
    this.loadingCtrl
      .create({ message: 'Please Wait', duration: 2000 })
      .then((loader) => loader.present());
    this.players = this.serv.getPlayers();
    this.fullListPlayers = this.serv.getPlayers();
  }

  onCancel() {
    this.players = this.fullListPlayers;
  }

  onClear() {
    this.players = this.fullListPlayers;
  }

  onChangeSearchValue() {
    if (this.searchBarInput === '') {
      this.players = this.fullListPlayers;
      return;
    }

    console.log(this.searchBarInput);
    this.players = this.players.filter((player) =>
      player.name
        .toLocaleLowerCase()
        .includes(this.searchBarInput.toLocaleLowerCase())
    );
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
      this.router.navigateByUrl('home/players/' + favorite.id);
    }
  }

  ngOnInit() {}
}
