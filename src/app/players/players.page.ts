import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
  players: Player[] = [];

  constructor(private serv: PlayersService) {
    this.players = this.serv.getPlayers();
  }

  ngOnInit() {}
}
