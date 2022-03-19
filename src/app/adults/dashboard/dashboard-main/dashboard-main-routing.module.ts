import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardMainPage } from './dashboard-main.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardMainPageRoutingModule {}
