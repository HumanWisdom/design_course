import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionSignupPage } from './activate-subscription-signup.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionSignupPageRoutingModule {}
