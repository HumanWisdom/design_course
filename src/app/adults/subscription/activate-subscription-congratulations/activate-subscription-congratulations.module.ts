import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivateSubscriptionCongratulationsPageRoutingModule } from './activate-subscription-congratulations-routing.module';

import { ActivateSubscriptionCongratulationsPage } from './activate-subscription-congratulations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivateSubscriptionCongratulationsPageRoutingModule
  ],
  declarations: [ActivateSubscriptionCongratulationsPage]
})
export class ActivateSubscriptionCongratulationsPageModule {}
