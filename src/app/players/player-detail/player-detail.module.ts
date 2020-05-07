import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerDetailPageRoutingModule } from './player-detail-routing.module';

import { PlayerDetailPage } from './player-detail.page';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../shared/models/player.model';
import { PlayersService } from '../../shared/services/players.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerDetailPageRoutingModule,
    SharedModule,
  ],
  declarations: [PlayerDetailPage],
})
export class PlayerDetailPageModule {}
