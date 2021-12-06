import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionGuestPageRoutingModule } from './activate-subscription-guest-routing.module';

import { ActivateSubscriptionGuestPage } from './activate-subscription-guest.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionGuestPageRoutingModule,
    SharedModule
  ],
  declarations: [ActivateSubscriptionGuestPage]
})
export class ActivateSubscriptionGuestPageModule {}
