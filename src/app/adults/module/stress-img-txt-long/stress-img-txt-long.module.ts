import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StressImgTxtLongPageRoutingModule } from './stress-img-txt-long-routing.module';

import { StressImgTxtLongPage } from './stress-img-txt-long.page';

import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StressImgTxtLongPageRoutingModule,
    SharedModule,
  ],
  declarations: [StressImgTxtLongPage]
})
export class StressImgTxtLongPageModule {}
