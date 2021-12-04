import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomPointsRedeemPageRoutingModule } from './wisdom-points-redeem-routing.module';

import { WisdomPointsRedeemPage } from './wisdom-points-redeem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomPointsRedeemPageRoutingModule
  ],
  declarations: [WisdomPointsRedeemPage]
})
export class WisdomPointsRedeemPageModule {}
