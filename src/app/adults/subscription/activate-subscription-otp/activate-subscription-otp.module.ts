import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionOtpPageRoutingModule } from './activate-subscription-otp-routing.module';

import { ActivateSubscriptionOtpPage } from './activate-subscription-otp.page';

import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionOtpPageRoutingModule,
    SharedModule,
  ],
  declarations: [ActivateSubscriptionOtpPage]
})
export class ActivateSubscriptionOtpPageModule {}
