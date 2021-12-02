import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivateSubscriptionMsgPage } from './activate-subscription-msg.page';

const routes: Routes = [
  {
    path: '',
    component: ActivateSubscriptionMsgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivateSubscriptionMsgPageRoutingModule {}
