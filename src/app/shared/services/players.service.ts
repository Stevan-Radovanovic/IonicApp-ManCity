import { Injectable } from '@angular/core';
import { Player } from '../models/player.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  playerSubject = new BehaviorSubject<Player[]>([]);
  players: Player[] = [];

  getPlayers() {
    return this.http
      .get<{ documents: Player[] }>('http://localhost:3000/players')
      .pipe(
        tap((players) => {
          this.playerSubject.next(players.documents);
        })
      );
  }

  getPlayersByEmail() {
    return this.http
      .get<{ documents: Player[] }>('http://localhost:3000/players/email', {
        params: { email: localStorage.getItem('email') },
      })
      .pipe(
        tap((players) => {
          console.log(players);
          this.playerSubject.next(players.documents);
        })
      );
  }

  getPlayer(id: string) {
    console.log('%c ALERT: Player Fetched', environment.consoleLog);
    let selectedPlayer: Player;
    this.playerSubject.pipe(take(1)).subscribe((players) => {
      selectedPlayer = players.find((player) => {
        return player._id === id;
      });
    });
    return selectedPlayer;
  }

  postPlayer(player: Player) {
    return this.http
      .post<{ signal: boolean }>('http://localhost:3000/players', player, {
        params: {
          email: localStorage.getItem('email'),
        },
      })
      .pipe(
        tap((result) => {
          if (result.signal === true) {
            this.playerSubject.pipe(take(1)).subscribe((players) => {
              this.playerSubject.next(players.concat(player));
            });
          }
        })
      );
  }

  deletePlayer(pid: string) {
    return this.http
      .delete<{ signal: boolean }>('http://localhost:3000/players/deleteOne', {
        params: {
          id: pid,
        },
      })
      .pipe(
        tap((response) => {
          if (response.signal === true) {
            this.playerSubject.pipe(take(1)).subscribe((players) => {
              this.playerSubject.next(players.filter((pl) => pid !== pl._id));
            });
          }
        })
      );
  }
}
