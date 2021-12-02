import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionSignupPageRoutingModule } from './activate-subscription-signup-routing.module';

import { ActivateSubscriptionSignupPage } from './activate-subscription-signup.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionSignupPageRoutingModule,
    SharedModule
  ],
  declarations: [ActivateSubscriptionSignupPage]
})
export class ActivateSubscriptionSignupPageModule {}
