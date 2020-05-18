import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayersPageRoutingModule } from './players-routing.module';

import { PlayersPage } from './players.page';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { PlayerModalPage } from './player-modal/player-modal.page';
import { PlayerModalPageModule } from './player-modal/player-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayersPageRoutingModule,
    SharedModule,
    HttpClientModule,
    PlayerModalPageModule,
  ],
  declarations: [PlayersPage],
  entryComponents: [PlayerModalPage],
})
export class PlayersPageModule {}
