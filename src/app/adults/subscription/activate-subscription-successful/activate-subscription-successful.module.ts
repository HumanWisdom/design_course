import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionSuccessfulPageRoutingModule } from './activate-subscription-successful-routing.module';

import { ActivateSubscriptionSuccessfulPage } from './activate-subscription-successful.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionSuccessfulPageRoutingModule
  ],
  declarations: [ActivateSubscriptionSuccessfulPage]
})
export class ActivateSubscriptionSuccessfulPageModule {}
