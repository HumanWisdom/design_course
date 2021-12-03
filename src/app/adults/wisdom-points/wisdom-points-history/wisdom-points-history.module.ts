import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomPointsHistoryPageRoutingModule } from './wisdom-points-history-routing.module';

import { WisdomPointsHistoryPage } from './wisdom-points-history.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomPointsHistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomPointsHistoryPage]
})
export class WisdomPointsHistoryPageModule {}
