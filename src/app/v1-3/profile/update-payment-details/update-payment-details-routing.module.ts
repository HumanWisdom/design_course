import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePaymentDetailsPage } from './update-payment-details.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePaymentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePaymentDetailsPageRoutingModule {}
