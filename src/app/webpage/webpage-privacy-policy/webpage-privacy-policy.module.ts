import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebpagePrivacyPolicyPageRoutingModule } from './webpage-privacy-policy-routing.module';

import { WebpagePrivacyPolicyPage } from './webpage-privacy-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebpagePrivacyPolicyPageRoutingModule
  ],
  declarations: [WebpagePrivacyPolicyPage]
})
export class WebpagePrivacyPolicyPageModule {}
