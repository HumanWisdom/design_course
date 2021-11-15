import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS03V01Page } from './subscription-s03-v01.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS03V01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS03V01PageRoutingModule {}
