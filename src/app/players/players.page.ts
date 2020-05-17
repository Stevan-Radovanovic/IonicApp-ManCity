import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/models/player.model';
import { PlayersService } from '../shared/services/players.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  async ionViewWillEnter() {
    const loader = await this.loadingCtrl.create({ message: 'Please Wait' });
    loader.present();
    this.serv.getPlayers().subscribe((response) => {
      this.players = response.documents;
      this.serv.players = this.players;
      this.fullListPlayers = this.players;
      loader.dismiss();
      console.log('%c ALERT: Players Fetched', environment.consoleLog);
    });
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
    this.players = this.fullListPlayers.filter((player) =>
      player.name
        .toLocaleLowerCase()
        .includes(this.searchBarInput.toLocaleLowerCase())
    );
  }

  ngOnInit() {}
}
