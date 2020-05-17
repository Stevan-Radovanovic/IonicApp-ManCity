import { Injectable } from '@angular/core';
import { Coach } from '../models/coach.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoachesService {
  constructor(private http: HttpClient) {}

  hasFavorite = false;

  coaches: Coach[] = [];

  getCoaches() {
    return this.http.get<{ documents: Coach[] }>(
      'http://localhost:3000/coaches'
    );
  }

  getCoach(id: string) {
    console.log('%c ALERT: Coach Fetched', environment.consoleLog);
    return this.coaches.find((coach) => {
      return coach._id === id;
    });
  }

  postCoach(coach: Coach) {
    this.http
      .post<{ signal: boolean }>('http://localhost:3000/coaches', coach)
      .subscribe(
        (response) => {
          console.log('%c ALERT: Coach Saved', environment.consoleLog);
        },
        (error) => {
          console.log('%c ERROR: ' + error, environment.consoleLogError);
        }
      );
  }
}
