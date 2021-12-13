import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionLoggedInCodeInvalidPage } from './activate-subscription-logged-in-code-invalid.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionLoggedInCodeInvalidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionLoggedInCodeInvalidPageRoutingModule {}
