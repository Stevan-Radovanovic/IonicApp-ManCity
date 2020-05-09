import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachDetailPageRoutingModule } from './coach-detail-routing.module';

import { CoachDetailPage } from './coach-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [CoachDetailPage],
})
export class CoachDetailPageModule {}
