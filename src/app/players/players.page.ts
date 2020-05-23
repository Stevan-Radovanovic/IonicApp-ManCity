import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/models/player.model';
import { PlayersService } from '../shared/services/players.service';
import {
  AlertController,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PlayerModalPage } from './player-modal/player-modal.page';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  players: Player[] = [];
  fullListPlayers: Player[] = [];
  searchBarInput: string;
  sub: Subscription;
  hasPlayers = false;
  isLoading = true;

  constructor(
    private serv: PlayersService,
    private modalController: ModalController,
    private loadingCtrl: LoadingController
  ) {}

  async getPlayers() {
    const loader = await this.loadingCtrl.create({ message: 'Please Wait...' });
    this.isLoading = true;
    loader.present();
    this.serv
      .getPlayersByEmail()
      .pipe(
        tap(() => {
          this.sub = this.serv.playerSubject.subscribe((response) => {
            console.log('%c ALERT: Subject Triggered', environment.consoleLog);
            if (response.length > 0) {
              this.hasPlayers = true;
            }
            this.players = response;
            this.fullListPlayers = this.players;
            if (this.players.length === 0) {
              this.hasPlayers = false;
            }
          });
        })
      )
      .subscribe(() => {
        console.log('%c ALERT: Players Fetched', environment.consoleLog);
        loader.dismiss();
        this.isLoading = false;
      });
  }

  async ionViewWillEnter() {
    this.getPlayers();
  }

  ionViewWillLeave() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  async onActivateModal() {
    const modal = await this.modalController.create({
      component: PlayerModalPage,
    });
    modal.present();
    modal.onDidDismiss().then(() => {
      this.sub.unsubscribe();
      this.getPlayers();
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

  onClickDelete(player: Player) {
    this.serv.deletePlayer(player._id).subscribe(
      (response) => {
        console.log('%c ALERT: Player Deleted', environment.consoleLog);
      },
      (error) => {
        console.log('%c ERROR: ' + error, environment.consoleLogError);
      }
    );
  }

  ngOnInit() {}
}
