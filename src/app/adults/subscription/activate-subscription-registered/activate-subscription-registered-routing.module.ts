import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionRegisteredPage } from './activate-subscription-registered.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionRegisteredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionRegisteredPageRoutingModule {}
