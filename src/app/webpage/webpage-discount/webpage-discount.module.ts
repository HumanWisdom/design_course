import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageDiscountPageRoutingModule } from './webpage-discount-routing.module';

import { WebpageDiscountPage } from './webpage-discount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageDiscountPageRoutingModule
  ],
  declarations: [WebpageDiscountPage]
})
export class WebpageDiscountPageModule {}
