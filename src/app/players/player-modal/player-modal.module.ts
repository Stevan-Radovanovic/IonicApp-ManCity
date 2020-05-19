import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerModalPageRoutingModule } from './player-modal-routing.module';

import { PlayerModalPage } from './player-modal.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PlayerModalPageRoutingModule,
    SharedModule,
  ],
  declarations: [PlayerModalPage],
  exports: [PlayerModalPage],
})
export class PlayerModalPageModule {}
