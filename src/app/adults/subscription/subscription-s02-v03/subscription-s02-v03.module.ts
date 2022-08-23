import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS02V03PageRoutingModule } from './subscription-s02-v03-routing.module';

import { SubscriptionS02V03Page } from './subscription-s02-v03.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS02V03PageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionS02V03Page]
})
export class SubscriptionS02V03PageModule {}
