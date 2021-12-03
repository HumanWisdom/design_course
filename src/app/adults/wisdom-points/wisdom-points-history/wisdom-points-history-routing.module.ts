import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomPointsHistoryPage } from './wisdom-points-history.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomPointsHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomPointsHistoryPageRoutingModule {}
