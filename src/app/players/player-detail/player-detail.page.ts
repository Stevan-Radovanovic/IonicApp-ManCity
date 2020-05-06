import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../players.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.page.html',
  styleUrls: ['./player-detail.page.scss'],
})
export class PlayerDetailPage implements OnInit {
  player: Player = null;

  constructor(private route: ActivatedRoute, private serv: PlayersService) {}

  ngOnInit(): void {
    console.log(this.player);
    this.route.paramMap.subscribe((paramMap) => {
      console.log(paramMap);
      this.player = this.serv.getPlayer(+paramMap.get('id'));
      console.log(this.player);
    });
  }
}
