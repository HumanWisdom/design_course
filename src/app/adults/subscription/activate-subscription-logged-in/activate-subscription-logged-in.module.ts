import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInPageRoutingModule } from './activate-subscription-logged-in-routing.module';

import { ActivateSubscriptionLoggedInPage } from './activate-subscription-logged-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionLoggedInPageRoutingModule
  ],
  declarations: [ActivateSubscriptionLoggedInPage]
})
export class ActivateSubscriptionLoggedInPageModule {}
