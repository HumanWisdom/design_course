import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardModuleTranscriptPage } from './dashboard-module-transcript.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardModuleTranscriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardModuleTranscriptPageRoutingModule {}
