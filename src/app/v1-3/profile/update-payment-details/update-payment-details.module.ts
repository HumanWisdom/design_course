import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePaymentDetailsPageRoutingModule } from './update-payment-details-routing.module';

import { UpdatePaymentDetailsPage } from './update-payment-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePaymentDetailsPageRoutingModule
  ],
  declarations: [UpdatePaymentDetailsPage]
})
export class UpdatePaymentDetailsPageModule {}
