import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachesPageRoutingModule } from './coaches-routing.module';

import { CoachesPage } from './coaches.page';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoachModalPage } from './coach-modal/coach-modal.page';
import { CoachModalPageModule } from './coach-modal/coach-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachesPageRoutingModule,
    SharedModule,
    HttpClientModule,
    CoachModalPageModule,
  ],
  declarations: [CoachesPage],
  entryComponents: [CoachModalPage],
})
export class CoachesPageModule {}
