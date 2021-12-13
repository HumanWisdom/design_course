import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInCodePageRoutingModule } from './activate-subscription-logged-in-code-routing.module';

import { ActivateSubscriptionLoggedInCodePage } from './activate-subscription-logged-in-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionLoggedInCodePageRoutingModule
  ],
  declarations: [ActivateSubscriptionLoggedInCodePage]
})
export class ActivateSubscriptionLoggedInCodePageModule {}
