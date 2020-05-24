import { Component, OnInit } from '@angular/core';
import { Coach } from '../shared/models/coach.model';
import { CoachesService } from '../shared/services/coaches.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CoachModalPage } from './coach-modal/coach-modal.page';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.page.html',
  styleUrls: ['./coaches.page.scss'],
})
export class CoachesPage implements OnInit {
  coaches: Coach[] = [];
  fullListCoaches: Coach[] = [];
  searchBarInput: string;
  hasCoaches = false;
  isLoading = true;

  constructor(
    private serv: CoachesService,
    private modalController: ModalController,
    private loadingCtrl: LoadingController,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  async getCoaches() {
    const loader = await this.loadingCtrl.create({ message: 'Please Wait...' });
    this.isLoading = true;
    loader.present();
    this.serv
      .getCoachesByEmail()
      .pipe(
        tap(() => {
          this.auth.coachSub = this.serv.coachSubject.subscribe((response) => {
            console.log('%c ALERT: Subject Triggered', environment.consoleLog);
            if (response.length > 0) {
              this.hasCoaches = true;
            }
            this.coaches = response;
            this.fullListCoaches = this.coaches;
            if (this.coaches.length === 0) {
              this.hasCoaches = false;
            }
          });
        })
      )
      .subscribe(() => {
        console.log('%c ALERT: Coaches Fetched', environment.consoleLog);
        loader.dismiss();
        this.isLoading = false;
      });
  }

  async ionViewWillEnter() {
    this.getCoaches();
  }

  ionViewWillLeave() {
    if (this.auth.coachSub) {
      this.auth.coachSub.unsubscribe();
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
    modal.onDidDismiss().then(() => {
      this.auth.coachSub.unsubscribe();
      this.getCoaches();
    });
  }

  onClickDelete(coach: Coach) {
    this.serv.deleteCoach(coach._id).subscribe(
      (response) => {
        console.log('%c ALERT: Coach Deleted', environment.consoleLog);
      },
      (error: Error) => {
        console.log('%c ERROR: ' + error.message, environment.consoleLogError);
      }
    );
  }
}
