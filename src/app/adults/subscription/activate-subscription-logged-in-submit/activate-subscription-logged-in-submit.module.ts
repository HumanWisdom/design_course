import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInSubmitPageRoutingModule } from './activate-subscription-logged-in-submit-routing.module';

import { ActivateSubscriptionLoggedInSubmitPage } from './activate-subscription-logged-in-submit.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionLoggedInSubmitPageRoutingModule,
    SharedModule,
  ],
  declarations: [ActivateSubscriptionLoggedInSubmitPage]
})
export class ActivateSubscriptionLoggedInSubmitPageModule {}
