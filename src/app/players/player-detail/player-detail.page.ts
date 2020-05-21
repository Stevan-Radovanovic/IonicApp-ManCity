import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../../shared/services/players.service';
import { Player } from '../../shared/models/player.model';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

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
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    console.log(this.player);
    this.route.paramMap.subscribe((paramMap) => {
      this.player = this.serv.getPlayer(paramMap.get('id'));
      if (this.player === undefined || this.player === null) {
        this.router.navigateByUrl('/home/players');
      }
    });
  }

  onDeletePlayer() {
    this.serv.deletePlayer(this.player._id).subscribe(
      (response) => {
        console.log('%c ALERT: Player Deleted', environment.consoleLog);
        this.router.navigateByUrl('/home/players');
      },
      (error: Error) => {
        console.log('%c ERROR: ' + error.message, environment.consoleLogError);
      }
    );
  }
}
