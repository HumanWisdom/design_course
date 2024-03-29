import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomPointsRewardRedeemPageRoutingModule } from './wisdom-points-reward-redeem-routing.module';

import { WisdomPointsRewardRedeemPage } from './wisdom-points-reward-redeem.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomPointsRewardRedeemPageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomPointsRewardRedeemPage]
})
export class WisdomPointsRewardRedeemPageModule {}
