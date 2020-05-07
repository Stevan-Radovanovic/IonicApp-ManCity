import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersPage } from './players.page';

const routes: Routes = [
  {
    path: '',
    component: PlayersPage,
    children: [],
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./player-detail/player-detail.module').then(
        (m) => m.PlayerDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersPageRoutingModule {}
