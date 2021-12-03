import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WisdomPointsIndexPageRoutingModule } from './wisdom-points-index-routing.module';

import { WisdomPointsIndexPage } from './wisdom-points-index.page';

import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WisdomPointsIndexPageRoutingModule,
    SharedModule
  ],
  declarations: [WisdomPointsIndexPage]
})
export class WisdomPointsIndexPageModule {}
