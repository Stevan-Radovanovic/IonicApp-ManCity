import { Injectable } from '@angular/core';
import { Coach } from '../models/coach.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoachesService {
  constructor(private http: HttpClient) {}

  hasFavorite = false;

  coachSubject = new BehaviorSubject<Coach[]>([]);
  coaches: Coach[] = [];

  getCoaches() {
    return this.http
      .get<{ documents: Coach[] }>('http://localhost:3000/coaches')
      .pipe(
        tap((coaches) => {
          this.coachSubject.next(coaches.documents);
        })
      );
  }

  getCoachesByEmail() {
    return this.http
      .get<{ documents: Coach[] }>('http://localhost:3000/coaches/email', {
        params: { email: localStorage.getItem('email') },
      })
      .pipe(
        tap((coaches) => {
          console.log(coaches);
          this.coachSubject.next(coaches.documents);
        })
      );
  }

  getCoach(id: string) {
    console.log('%c ALERT: Coach Fetched', environment.consoleLog);
    let selectedCoach: Coach;
    this.coachSubject.pipe(take(1)).subscribe((coaches) => {
      selectedCoach = coaches.find((coach) => {
        return coach._id === id;
      });
    });
    return selectedCoach;
  }

  postCoach(coach: Coach) {
    return this.http
      .post<{ signal: boolean }>('http://localhost:3000/coaches', coach, {
        params: {
          email: localStorage.getItem('email'),
        },
      })
      .pipe(
        tap((result) => {
          if (result.signal === true) {
            this.coachSubject.pipe(take(1)).subscribe((coaches) => {
              this.coachSubject.next(coaches.concat(coach));
            });
          }
        })
      );
  }

  deleteCoach(pid: string) {
    return this.http
      .delete<{ signal: boolean }>('http://localhost:3000/coaches/deleteOne', {
        params: {
          id: pid,
        },
      })
      .pipe(
        tap((response) => {
          if (response.signal === true) {
            this.coachSubject.pipe(take(1)).subscribe((coaches) => {
              this.coachSubject.next(coaches.filter((co) => pid !== co._id));
            });
          }
        })
      );
  }
}
