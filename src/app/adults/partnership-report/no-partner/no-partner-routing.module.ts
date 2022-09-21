import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoPartnerPage } from './no-partner.page';

const routes: Routes = [
  {
    path: '',
    component: NoPartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoPartnerPageRoutingModule {}
