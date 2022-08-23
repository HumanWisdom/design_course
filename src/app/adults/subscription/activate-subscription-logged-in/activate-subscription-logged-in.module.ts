import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionLoggedInPageRoutingModule } from './activate-subscription-logged-in-routing.module';

import { ActivateSubscriptionLoggedInPage } from './activate-subscription-logged-in.page';

import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionLoggedInPageRoutingModule,
    SharedModule,
  ],
  declarations: [ActivateSubscriptionLoggedInPage]
})
export class ActivateSubscriptionLoggedInPageModule {}
