import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomPointsRewardRedeemedPageRoutingModule } from './wisdom-points-reward-redeemed-routing.module';

import { WisdomPointsRewardRedeemedPage } from './wisdom-points-reward-redeemed.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomPointsRewardRedeemedPageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomPointsRewardRedeemedPage]
})
export class WisdomPointsRewardRedeemedPageModule {}
