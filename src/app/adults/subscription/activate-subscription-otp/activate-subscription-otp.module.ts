import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionOtpPageRoutingModule } from './activate-subscription-otp-routing.module';

import { ActivateSubscriptionOtpPage } from './activate-subscription-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionOtpPageRoutingModule
  ],
  declarations: [ActivateSubscriptionOtpPage]
})
export class ActivateSubscriptionOtpPageModule {}
