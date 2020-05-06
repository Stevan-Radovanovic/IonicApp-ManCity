import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  players: Player[] = [
    {
      id: 1,
      name: 'Sergio Aguero',
      jerseyNumber: 10,
      imageUrl:
        'https://resources.premierleague.com/premierleague/photo/2019/11/20/14c7bf94-829f-40e4-8f2d-4c25812fc508/Sergio-Aguero-2.jpg',
    },
    {
      id: 2,
      name: 'Yaya Toure',
      jerseyNumber: 42,
      imageUrl:
        'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/12/11/15/gettyimages-956599142.jpg',
    },
  ];

  getPlayers() {
    return this.players;
  }

  getPlayer(id: number) {
    return this.players.find((player) => {
      return player.id === id;
    });
  }
}
