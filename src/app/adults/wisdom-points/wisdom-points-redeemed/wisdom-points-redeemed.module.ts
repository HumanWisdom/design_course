import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomPointsRedeemedPageRoutingModule } from './wisdom-points-redeemed-routing.module';

import { WisdomPointsRedeemedPage } from './wisdom-points-redeemed.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomPointsRedeemedPageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomPointsRedeemedPage]
})
export class WisdomPointsRedeemedPageModule {}
