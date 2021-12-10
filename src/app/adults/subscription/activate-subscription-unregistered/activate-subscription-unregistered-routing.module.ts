import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionUnregisteredPage } from './activate-subscription-unregistered.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionUnregisteredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionUnregisteredPageRoutingModule {}
