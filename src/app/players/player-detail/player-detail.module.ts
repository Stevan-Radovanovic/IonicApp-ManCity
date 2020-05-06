import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerDetailPageRoutingModule } from './player-detail-routing.module';

import { PlayerDetailPage } from './player-detail.page';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player.model';
import { PlayersService } from '../players.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerDetailPageRoutingModule,
  ],
  declarations: [PlayerDetailPage],
})
export class PlayerDetailPageModule {}
