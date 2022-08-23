import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionCongratulationsPageRoutingModule } from './activate-subscription-congratulations-routing.module';

import { ActivateSubscriptionCongratulationsPage } from './activate-subscription-congratulations.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionCongratulationsPageRoutingModule,
    SharedModule,
  ],
  declarations: [ActivateSubscriptionCongratulationsPage]
})
export class ActivateSubscriptionCongratulationsPageModule {}
