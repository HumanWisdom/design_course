import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoPartnerPageRoutingModule } from './no-partner-routing.module';

import { NoPartnerPage } from './no-partner.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoPartnerPageRoutingModule,
    SharedModule
  ],
  declarations: [NoPartnerPage]
})
export class NoPartnerPageModule {}
