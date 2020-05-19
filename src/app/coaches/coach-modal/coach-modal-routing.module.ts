import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachModalPage } from './coach-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CoachModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachModalPageRoutingModule {}
