import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInCodeInvalidPageRoutingModule } from './activate-subscription-logged-in-code-invalid-routing.module';

import { ActivateSubscriptionLoggedInCodeInvalidPage } from './activate-subscription-logged-in-code-invalid.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionLoggedInCodeInvalidPageRoutingModule,
    SharedModule
  ],
  declarations: [ActivateSubscriptionLoggedInCodeInvalidPage]
})
export class ActivateSubscriptionLoggedInCodeInvalidPageModule {}
