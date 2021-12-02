import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionCodePage } from './activate-subscription-code.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionCodePageRoutingModule {}
