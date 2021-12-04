import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomPointsRedeemPage } from './wisdom-points-redeem.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomPointsRedeemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomPointsRedeemPageRoutingModule {}
