import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebpageOpsAdultsPage } from './webpage-ops-adults.page';

const routes: Routes = [
  {
    path: '',
    component: WebpageOpsAdultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebpageOpsAdultsPageRoutingModule {}
