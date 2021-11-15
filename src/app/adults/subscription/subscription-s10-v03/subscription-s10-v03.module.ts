import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS10V03PageRoutingModule } from './subscription-s10-v03-routing.module';

import { SubscriptionS10V03Page } from './subscription-s10-v03.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS10V03PageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionS10V03Page]
})
export class SubscriptionS10V03PageModule {}
