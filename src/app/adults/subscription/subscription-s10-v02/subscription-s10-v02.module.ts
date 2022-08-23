import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS10V02PageRoutingModule } from './subscription-s10-v02-routing.module';

import { SubscriptionS10V02Page } from './subscription-s10-v02.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS10V02PageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionS10V02Page]
})
export class SubscriptionS10V02PageModule {}
