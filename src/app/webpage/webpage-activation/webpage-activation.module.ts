import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageActivationPageRoutingModule } from './webpage-activation-routing.module';

import { WebpageActivationPage } from './webpage-activation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageActivationPageRoutingModule
  ],
  declarations: [WebpageActivationPage]
})
export class WebpageActivationPageModule {}
