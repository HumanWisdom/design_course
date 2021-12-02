import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionCodePageRoutingModule } from './activate-subscription-code-routing.module';

import { ActivateSubscriptionCodePage } from './activate-subscription-code.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionCodePageRoutingModule,
    SharedModule
  ],
  declarations: [ActivateSubscriptionCodePage]
})
export class ActivateSubscriptionCodePageModule {}
