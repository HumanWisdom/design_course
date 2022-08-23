import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInCodeValidPageRoutingModule } from './activate-subscription-logged-in-code-valid-routing.module';

import { ActivateSubscriptionLoggedInCodeValidPage } from './activate-subscription-logged-in-code-valid.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionLoggedInCodeValidPageRoutingModule,
    SharedModule,
  ],
  declarations: [ActivateSubscriptionLoggedInCodeValidPage]
})
export class ActivateSubscriptionLoggedInCodeValidPageModule {}
