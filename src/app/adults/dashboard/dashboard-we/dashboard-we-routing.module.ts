import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardWePage } from './dashboard-we.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardWePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardWePageRoutingModule {}
