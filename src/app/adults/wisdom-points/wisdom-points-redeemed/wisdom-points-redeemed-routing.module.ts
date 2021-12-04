import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomPointsRedeemedPage } from './wisdom-points-redeemed.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomPointsRedeemedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomPointsRedeemedPageRoutingModule {}
