import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpageCookiePolicyPageRoutingModule } from './webpage-cookie-policy-routing.module';

import { WebpageCookiePolicyPage } from './webpage-cookie-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpageCookiePolicyPageRoutingModule
  ],
  declarations: [WebpageCookiePolicyPage]
})
export class WebpageCookiePolicyPageModule {}
