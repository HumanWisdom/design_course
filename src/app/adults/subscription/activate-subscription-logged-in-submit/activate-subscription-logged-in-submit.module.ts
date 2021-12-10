import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInSubmitPageRoutingModule } from './activate-subscription-logged-in-submit-routing.module';

import { ActivateSubscriptionLoggedInSubmitPage } from './activate-subscription-logged-in-submit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionLoggedInSubmitPageRoutingModule
  ],
  declarations: [ActivateSubscriptionLoggedInSubmitPage]
})
export class ActivateSubscriptionLoggedInSubmitPageModule {}
