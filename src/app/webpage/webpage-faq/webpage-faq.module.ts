import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageFaqPageRoutingModule } from './webpage-faq-routing.module';

import { WebpageFaqPage } from './webpage-faq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageFaqPageRoutingModule
  ],
  declarations: [WebpageFaqPage]
})
export class WebpageFaqPageModule {}
