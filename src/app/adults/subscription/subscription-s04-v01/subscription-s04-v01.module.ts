import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS04V01PageRoutingModule } from './subscription-s04-v01-routing.module';

import { SubscriptionS04V01Page } from './subscription-s04-v01.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS04V01PageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionS04V01Page]
})
export class SubscriptionS04V01PageModule {}
