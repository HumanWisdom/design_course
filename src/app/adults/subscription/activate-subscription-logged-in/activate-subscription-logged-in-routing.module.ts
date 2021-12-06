import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionLoggedInPage } from './activate-subscription-logged-in.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionLoggedInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionLoggedInPageRoutingModule {}
