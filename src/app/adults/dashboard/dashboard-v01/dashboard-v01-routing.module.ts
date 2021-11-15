import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardV01Page } from './dashboard-v01.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardV01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardV01PageRoutingModule {}
