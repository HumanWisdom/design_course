import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionLoggedInSubmitPage } from './activate-subscription-logged-in-submit.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionLoggedInSubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionLoggedInSubmitPageRoutingModule {}
