import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS01V01PageRoutingModule } from './subscription-s01-v01-routing.module';

import { SubscriptionS01V01Page } from './subscription-s01-v01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS01V01PageRoutingModule
  ],
  declarations: [SubscriptionS01V01Page]
})
export class SubscriptionS01V01PageModule {}
