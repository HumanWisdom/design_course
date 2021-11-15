import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageAboutMkPageRoutingModule } from './webpage-about-mk-routing.module';

import { WebpageAboutMkPage } from './webpage-about-mk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageAboutMkPageRoutingModule
  ],
  declarations: [WebpageAboutMkPage]
})
export class WebpageAboutMkPageModule {}
