import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachModalPageRoutingModule } from './coach-modal-routing.module';

import { CoachModalPage } from './coach-modal.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CoachModalPageRoutingModule,
    SharedModule,
  ],
  declarations: [CoachModalPage],
  exports: [CoachModalPage],
})
export class CoachModalPageModule {}
