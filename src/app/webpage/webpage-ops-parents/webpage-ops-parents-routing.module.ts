import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageOpsParentsPage } from './webpage-ops-parents.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageOpsParentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageOpsParentsPageRoutingModule {}
