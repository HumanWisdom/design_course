import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionMsgPageRoutingModule } from './activate-subscription-msg-routing.module';

import { ActivateSubscriptionMsgPage } from './activate-subscription-msg.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionMsgPageRoutingModule,
    SharedModule
  ],
  declarations: [ActivateSubscriptionMsgPage]
})
export class ActivateSubscriptionMsgPageModule {}
