import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageSignupPageRoutingModule } from './webpage-signup-routing.module';

import { WebpageSignupPage } from './webpage-signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageSignupPageRoutingModule
  ],
  declarations: [WebpageSignupPage]
})
export class WebpageSignupPageModule {}
