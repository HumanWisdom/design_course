import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupAffiliatePageRoutingModule } from './signup-affiliate-routing.module';

import { SignupAffiliatePage } from './signup-affiliate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupAffiliatePageRoutingModule
  ],
  declarations: [SignupAffiliatePage]
})
export class SignupAffiliatePageModule {}
