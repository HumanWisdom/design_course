import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsHwpWorkPageRoutingModule } from './adverts-hwp-work-routing.module';

import { AdvertsHwpWorkPage } from './adverts-hwp-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsHwpWorkPageRoutingModule
  ],
  declarations: [AdvertsHwpWorkPage]
})
export class AdvertsHwpWorkPageModule {}
