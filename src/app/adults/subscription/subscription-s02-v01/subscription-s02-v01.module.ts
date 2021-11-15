import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS02V01PageRoutingModule } from './subscription-s02-v01-routing.module';

import { SubscriptionS02V01Page } from './subscription-s02-v01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS02V01PageRoutingModule
  ],
  declarations: [SubscriptionS02V01Page]
})
export class SubscriptionS02V01PageModule {}
