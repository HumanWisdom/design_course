import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardResumePage } from './dashboard-resume.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardResumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardResumePageRoutingModule {}
