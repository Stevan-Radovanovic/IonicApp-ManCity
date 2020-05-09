import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachDetailPage } from './coach-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CoachDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachDetailPageRoutingModule {}
