import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionUnregisteredPageRoutingModule } from './activate-subscription-unregistered-routing.module';

import { ActivateSubscriptionUnregisteredPage } from './activate-subscription-unregistered.page';

import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionUnregisteredPageRoutingModule,
    SharedModule,
  ],
  declarations: [ActivateSubscriptionUnregisteredPage]
})
export class ActivateSubscriptionUnregisteredPageModule {}
