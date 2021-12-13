import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionLoggedInCodeValidPage } from './activate-subscription-logged-in-code-valid.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionLoggedInCodeValidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionLoggedInCodeValidPageRoutingModule {}
