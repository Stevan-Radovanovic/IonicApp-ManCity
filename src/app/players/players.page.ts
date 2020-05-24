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
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  players: Player[] = [];
  fullListPlayers: Player[] = [];
  searchBarInput: string;

  hasPlayers = false;
  isLoading = true;

  constructor(
    private serv: PlayersService,
    private auth: AuthService,
    private modalController: ModalController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  async getPlayers() {
    const loader = await this.loadingCtrl.create({ message: 'Please Wait...' });
    this.isLoading = true;
    loader.present();
    this.serv
      .getPlayersByEmail()
      .pipe(
        tap(() => {
          this.auth.playerSub = this.serv.playerSubject.subscribe(
            (response) => {
              console.log(
                '%c ALERT: Subject Triggered',
                environment.consoleLog
              );
              if (response.length > 0) {
                this.hasPlayers = true;
              }
              this.players = response;
              this.fullListPlayers = this.players;
              if (this.players.length === 0) {
                this.hasPlayers = false;
              }
            }
          );
        })
      )
      .subscribe(() => {
        console.log('%c ALERT: Players Fetched', environment.consoleLog);
        loader.dismiss();
        this.isLoading = false;
      });
  }

  async ionViewWillEnter() {
    console.log('TEST');
    this.getPlayers();
  }

  ionViewWillLeave() {
    if (this.auth.playerSub) {
      console.log('%c ALERT: Subscription Ended', environment.consoleLog);
      this.auth.playerSub.unsubscribe();
    }
  }

  async onActivateModal() {
    const modal = await this.modalController.create({
      component: PlayerModalPage,
    });
    modal.present();
    modal.onDidDismiss().then(() => {
      this.auth.playerSub.unsubscribe();
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

  onNavigate(player: Player) {
    this.router.navigateByUrl('home/players/' + player._id);
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
