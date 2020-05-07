import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  favouritePlayer: Player;
  hasFavorite = false;

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
    {
      id: 3,
      name: 'Edin Dzeko',
      jerseyNumber: 11,
      imageUrl:
        'https://www.mancity.com/meta/media/to5hibuy/edin1.jpg?width=1620',
    },
    {
      id: 4,
      name: 'Samir Nasri',
      jerseyNumber: 8,
      imageUrl:
        'https://i2-prod.manchestereveningnews.co.uk/incoming/article11163522.ece/ALTERNATES/s1200b/JS86964007.jpg',
    },
    {
      id: 5,
      name: 'Vincent Kompany',
      jerseyNumber: 4,
      imageUrl:
        // tslint:disable-next-line: max-line-length
        'https://www.telegraph.co.uk/content/dam/football/2020/01/13/TELEMMGLPICT000197738567_trans%2B%2BjHUglIIWz6-gx255g7FPPe2_ocpv-VgXds40sNfaFL0.jpeg',
    },
    {
      id: 6,
      name: 'Ederson',
      jerseyNumber: 31,
      imageUrl:
        'https://t.resfu.com/media/img_news/afp_en_0d319cdf640ccfbaf4249a2bf93de32387eeba50.jpg',
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
