import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomPointsRewardRedeemPage } from './wisdom-points-reward-redeem.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomPointsRewardRedeemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomPointsRewardRedeemPageRoutingModule {}
