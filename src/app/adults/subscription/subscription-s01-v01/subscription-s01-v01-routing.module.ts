import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS01V01Page } from './subscription-s01-v01.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS01V01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS01V01PageRoutingModule {}
