import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubscriptionS06V02PageRoutingModule } from './subscription-s06-v02-routing.module';

import { SubscriptionS06V02Page } from './subscription-s06-v02.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubscriptionS06V02PageRoutingModule,
    SharedModule
  ],
  declarations: [SubscriptionS06V02Page]
})
export class SubscriptionS06V02PageModule {}
