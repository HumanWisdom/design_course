import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageLandingPageRoutingModule } from './webpage-landing-routing.module';

import { WebpageLandingPage } from './webpage-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageLandingPageRoutingModule
  ],
  declarations: [WebpageLandingPage]
})
export class WebpageLandingPageModule {}
