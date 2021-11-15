import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageOpsTeenagersPage } from './webpage-ops-teenagers.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageOpsTeenagersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageOpsTeenagersPageRoutingModule {}
