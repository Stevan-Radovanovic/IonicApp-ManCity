import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/shared/models/coach.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachesService } from 'src/app/shared/services/coaches.service';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.page.html',
  styleUrls: ['./coach-detail.page.scss'],
})
export class CoachDetailPage implements OnInit {
  coach: Coach = null;

  constructor(
    private route: ActivatedRoute,
    private serv: CoachesService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.coach = this.serv.getCoach(paramMap.get('id'));
    });
  }

  onDeleteCoach() {
    this.serv.deleteCoach(this.coach._id).subscribe(
      (response) => {
        console.log('%c ALERT: Coach Deleted', environment.consoleLog);
        this.router.navigateByUrl('/home/coaches');
      },
      (error: Error) => {
        console.log('%c ERROR: ' + error.message, environment.consoleLogError);
      }
    );
  }
}
