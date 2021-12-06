import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionCongratulationsPage } from './activate-subscription-congratulations.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionCongratulationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionCongratulationsPageRoutingModule {}
