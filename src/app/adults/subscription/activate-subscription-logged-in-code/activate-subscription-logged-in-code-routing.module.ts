import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionLoggedInCodePage } from './activate-subscription-logged-in-code.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionLoggedInCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionLoggedInCodePageRoutingModule {}
