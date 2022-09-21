import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreePartnerPageRoutingModule } from './tree-partner-routing.module';

import { TreePartnerPage } from './tree-partner.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreePartnerPageRoutingModule,
    SharedModule
  ],
  declarations: [TreePartnerPage]
})
export class TreePartnerPageModule {}
