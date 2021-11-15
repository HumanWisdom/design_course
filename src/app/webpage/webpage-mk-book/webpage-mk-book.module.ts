import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageMkBookPageRoutingModule } from './webpage-mk-book-routing.module';

import { WebpageMkBookPage } from './webpage-mk-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageMkBookPageRoutingModule
  ],
  declarations: [WebpageMkBookPage]
})
export class WebpageMkBookPageModule {}
