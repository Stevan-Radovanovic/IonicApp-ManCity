import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'players',
        loadChildren: () =>
          import('../players/players.module').then((m) => m.PlayersPageModule),
      },
      {
        path: 'coaching',
        redirectTo: 'players',
        pathMatch: 'full',
      },
      {
        path: 'location',
        redirectTo: 'players',
        pathMatch: 'full',
      },
      {
        path: 'about',
        redirectTo: 'players',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
