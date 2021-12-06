import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionCodeInvalidPage } from './activate-subscription-code-invalid.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionCodeInvalidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionCodeInvalidPageRoutingModule {}
