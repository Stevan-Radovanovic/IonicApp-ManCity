import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private http: HttpClient) {}

  hasFavorite = false;

  players: Player[] = [];

  getPlayers() {
    return this.http.get<{ documents: Player[] }>(
      'http://localhost:3000/players'
    );
  }

  getPlayer(id: string) {
    console.log('%c ALERT: Player Fetched', environment.consoleLog);
    return this.players.find((player) => {
      return player._id === id;
    });
  }

  postPlayer(player: Player) {
    this.http
      .post<{ signal: boolean }>('http://localhost:3000/players', player)
      .subscribe(
        (response) => {
          console.log('%c ALERT: Player Saved', environment.consoleLog);
        },
        (error) => {
          console.log('%c ERROR: ' + error, environment.consoleLogError);
        }
      );
  }

  deletePlayer(pid: string) {
    return this.http.delete<{ signal: boolean }>(
      'http://localhost:3000/players/deleteOne',
      {
        params: {
          id: pid,
        },
      }
    );
  }
}
