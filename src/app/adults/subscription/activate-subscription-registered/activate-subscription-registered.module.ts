import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionRegisteredPageRoutingModule } from './activate-subscription-registered-routing.module';

import { ActivateSubscriptionRegisteredPage } from './activate-subscription-registered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionRegisteredPageRoutingModule
  ],
  declarations: [ActivateSubscriptionRegisteredPage]
})
export class ActivateSubscriptionRegisteredPageModule {}
