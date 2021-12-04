import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomPointsRewardRedeemedPageRoutingModule } from './wisdom-points-reward-redeemed-routing.module';

import { WisdomPointsRewardRedeemedPage } from './wisdom-points-reward-redeemed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomPointsRewardRedeemedPageRoutingModule
  ],
  declarations: [WisdomPointsRewardRedeemedPage]
})
export class WisdomPointsRewardRedeemedPageModule {}
