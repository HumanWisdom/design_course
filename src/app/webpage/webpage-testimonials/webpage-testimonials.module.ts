import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageTestimonialsPageRoutingModule } from './webpage-testimonials-routing.module';

import { WebpageTestimonialsPage } from './webpage-testimonials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageTestimonialsPageRoutingModule
  ],
  declarations: [WebpageTestimonialsPage]
})
export class WebpageTestimonialsPageModule {}
