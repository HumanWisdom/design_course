import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreePartnerPage } from './tree-partner.page';

const routes: Routes = [
  {
    path: '',
    component: TreePartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreePartnerPageRoutingModule {}
