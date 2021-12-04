import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomPointsRedeemedPageRoutingModule } from './wisdom-points-redeemed-routing.module';

import { WisdomPointsRedeemedPage } from './wisdom-points-redeemed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomPointsRedeemedPageRoutingModule
  ],
  declarations: [WisdomPointsRedeemedPage]
})
export class WisdomPointsRedeemedPageModule {}
