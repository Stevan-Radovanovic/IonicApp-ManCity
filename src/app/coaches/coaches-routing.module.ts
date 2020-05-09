import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachesPage } from './coaches.page';

const routes: Routes = [
  {
    path: '',
    component: CoachesPage,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./coach-detail/coach-detail.module').then(
        (m) => m.CoachDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachesPageRoutingModule {}
