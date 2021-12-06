import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionCodeInvalidPageRoutingModule } from './activate-subscription-code-invalid-routing.module';

import { ActivateSubscriptionCodeInvalidPage } from './activate-subscription-code-invalid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionCodeInvalidPageRoutingModule
  ],
  declarations: [ActivateSubscriptionCodeInvalidPage]
})
export class ActivateSubscriptionCodeInvalidPageModule {}
