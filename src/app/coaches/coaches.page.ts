import { Component, OnInit } from '@angular/core';
import { Coach } from '../shared/models/coach.model';
import { CoachesService } from '../shared/services/coaches.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CoachModalPage } from './coach-modal/coach-modal.page';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.page.html',
  styleUrls: ['./coaches.page.scss'],
})
export class CoachesPage implements OnInit {
  coaches: Coach[] = [];
  fullListCoaches: Coach[] = [];
  searchBarInput: string;
  sub: Subscription;
  hasCoaches = false;
  isLoading = true;

  constructor(
    private serv: CoachesService,
    private modalController: ModalController,
    private loadingCtrl: LoadingController
  ) {}

  async ionViewWillEnter() {
    const loader = await this.loadingCtrl.create({ message: 'Please Wait...' });
    this.isLoading = true;
    loader.present();
    this.serv
      .getCoaches()
      .pipe(
        tap(() => {
          this.sub = this.serv.coachSubject.subscribe((response) => {
            console.log('%c ALERT: Subject Triggered', environment.consoleLog);
            if (response.length > 0) {
              this.hasCoaches = true;
            }
            this.coaches = response;
            this.fullListCoaches = this.coaches;
          });
        })
      )
      .subscribe(() => {
        console.log('%c ALERT: Coaches Fetched', environment.consoleLog);
        loader.dismiss();
        this.isLoading = false;
      });
  }

  ionViewWillLeave() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onCancel() {
    this.coaches = this.fullListCoaches;
  }

  onClear() {
    this.coaches = this.fullListCoaches;
  }

  onChangeSearchValue() {
    if (this.searchBarInput === '') {
      this.coaches = this.fullListCoaches;
      return;
    }

    console.log(this.searchBarInput);
    this.coaches = this.fullListCoaches.filter((coach) =>
      coach.name
        .toLocaleLowerCase()
        .includes(this.searchBarInput.toLocaleLowerCase())
    );
  }

  async onActivateModal() {
    const modal = await this.modalController.create({
      component: CoachModalPage,
    });
    modal.present();
  }

  onClickDelete(coach: Coach) {
    this.serv.deleteCoach(coach._id);
  }

  ngOnInit() {}
}
