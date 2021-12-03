import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WisdomPointsIndexPage } from './wisdom-points-index.page';

const routes: Routes = [
  {
    path: '',
    component: WisdomPointsIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WisdomPointsIndexPageRoutingModule {}
