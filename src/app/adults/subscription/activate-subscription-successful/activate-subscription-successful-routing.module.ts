import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionSuccessfulPage } from './activate-subscription-successful.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionSuccessfulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionSuccessfulPageRoutingModule {}
