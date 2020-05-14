import { Injectable } from '@angular/core';
import { Coach } from '../models/coach.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoachesService {
  constructor() {}

  favoriteCoach: Coach;
  hasFavorite = false;

  coaches: Coach[] = [
    {
      id: 1,
      name: 'Pep Guardiola',
      imageUrl:
        // tslint:disable-next-line: max-line-length
        'https://images.daznservices.com/di/library/GOAL/36/5f/pep-guardiola-manchester-city-2018-19_4mz3izpa1tqy1nj0x4u5tg035.jpg?t=-1399093678&quality=60&w=1200&h=800',
    },
    {
      id: 2,
      name: 'Manuel Pelegrini',
      imageUrl:
        'https://chiletoday.cl/site/wp-content/uploads/2020/02/manuel-pellegrini.jpg',
    },
    {
      id: 3,
      name: 'Roberto Mancini',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/01/Roberto_Mancini_008.jpg',
    },
    {
      id: 4,
      name: 'Mark Hughes',
      imageUrl:
        'https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2018/01/01193045/GettyImages-900262508.jpg',
    },
  ];

  getCoaches() {
    console.log('%c ALERT: Coaches Fetched', environment.consoleLog);
    return this.coaches;
  }

  getCoach(id: number) {
    console.log('%c ALERT: Coach Fetched', environment.consoleLog);
    return this.coaches.find((coach) => {
      return coach.id === id;
    });
  }
}
