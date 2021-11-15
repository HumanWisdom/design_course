import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardV02Page } from './dashboard-v02.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardV02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardV02PageRoutingModule {}
