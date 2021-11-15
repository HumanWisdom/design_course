import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS04V01Page } from './subscription-s04-v01.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS04V01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS04V01PageRoutingModule {}
