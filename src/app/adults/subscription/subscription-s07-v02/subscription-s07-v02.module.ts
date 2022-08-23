import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS07V02PageRoutingModule } from './subscription-s07-v02-routing.module';

import { SubscriptionS07V02Page } from './subscription-s07-v02.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS07V02PageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionS07V02Page]
})
export class SubscriptionS07V02PageModule {}
