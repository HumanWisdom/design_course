import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS03V01PageRoutingModule } from './subscription-s03-v01-routing.module';

import { SubscriptionS03V01Page } from './subscription-s03-v01.page';

import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS03V01PageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionS03V01Page]
})
export class SubscriptionS03V01PageModule {}
