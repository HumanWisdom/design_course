import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomPointsRewardRedeemedPage } from './wisdom-points-reward-redeemed.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomPointsRewardRedeemedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomPointsRewardRedeemedPageRoutingModule {}
