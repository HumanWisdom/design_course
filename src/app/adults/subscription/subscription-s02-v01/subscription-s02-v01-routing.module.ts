import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS02V01Page } from './subscription-s02-v01.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS02V01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS02V01PageRoutingModule {}
