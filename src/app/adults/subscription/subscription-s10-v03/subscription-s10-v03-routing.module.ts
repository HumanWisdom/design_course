import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionS10V03Page } from './subscription-s10-v03.page';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionS10V03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionS10V03PageRoutingModule {}
