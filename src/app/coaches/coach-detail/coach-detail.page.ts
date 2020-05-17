import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/shared/models/coach.model';
import { ActivatedRoute } from '@angular/router';
import { CoachesService } from 'src/app/shared/services/coaches.service';
import { AlertController } from '@ionic/angular';

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
    private alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      console.log(paramMap);
      this.coach = this.serv.getCoach(paramMap.get('id'));
    });
  }
}
